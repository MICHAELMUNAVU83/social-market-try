import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar({
  currentUserName,
  storedToken,
  setStoredToken,
  setFilterQuery,
}) {
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
            <Link to="/all-reservations" className="nav-link mx-2 w-75">
              {" "}
              All Reservations
            </Link>
          ) : (
            <Link to="/my-reservations" className="nav-link mx-2 w-100">
              {" "}
              My Reservations
            </Link>
          )}
          {currentUserName === "admin" ? (
            <Link to="/add-events" className="nav-link w-75">
              {" "}
              Add Events
            </Link>
          ) : null}

          <input
            class="form-control w-100"
            type="text"
            placeholder="Search for an event"
            aria-label="Search"
            onChange={(e) => {
              setFilterQuery(e.target.value);
              
            }}
          />
          <button className="btn btn-primary mx-2" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </button>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/login" className="nav-link mx-4">
            {" "}
            Login{" "}
          </Link>
          <Link to="/" className="nav-link mx-4">
            {" "}
            Sign Up{" "}
          </Link>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
