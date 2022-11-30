import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar({ currentUserName, storedToken, setStoredToken }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setStoredToken("");
    navigate("/");
  };

  return (
    <div className="navbar bg-light d-flex justify-content-between">
      {storedToken ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            {" "}
            Home{" "}
          </Link>
          {currentUserName === "admin" ? (
            <Link to="/all-reservations" className="nav-link mx-4">
              {" "}
              All Reservations
            </Link>
          ) : (
            <Link to="/my-reservations" className="nav-link mx-4">
              {" "}
              My Reservations
            </Link>
          )}
          {currentUserName === "admin" ? (
            <Link to="/add-events" className="nav-link">
              {" "}
              Add Events
            </Link>
          ) : null}
          <button className="btn btn-primary mx-5" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </button>
        </nav>
      ) : (
        <nav>
          <a href="/login">Login</a>
          <a href="/">Sign Up</a>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
