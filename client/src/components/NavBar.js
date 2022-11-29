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
    <div>
      {storedToken ? (
        <nav>
          {currentUserName === "admin" ? (
            <Link to="/add-events">Add Events</Link>
          ) : null}
          <Link to="/">Home</Link>
          Welcome {currentUserName}!
          <button onClick={handleLogout}>Logout</button>
          {currentUserName === "admin" ? (
            <Link to="/all-reservations">All Reservations</Link>
          ) : (
            <Link to="/my-reservations">My Reservations</Link>
          )}
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
