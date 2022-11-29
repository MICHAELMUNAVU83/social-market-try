import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar(storedToken) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    storedToken.setStoredToken("");
    navigate("/");
  };

  return (
    <div>
      {storedToken.storedToken ? (
        <nav>
          <Link to="/add-events">Add Events</Link>
          <Link to="/">Home</Link>
          Welcome {storedToken.currrentUserName}!
          <button onClick={handleLogout}>Logout</button>
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
