import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar({
  currentUserName,
  storedToken,
  setStoredToken,
  setFilterQuery,
  setQuery,
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
          <section
            className=" w-100 mx-5"
            onChange={(e) => setQuery(e.target.value)}
          >
            <select class="form-select w-150 mx-5">
              <option value="">All events</option>
              <option value="male">male</option>
              <option value="female">Female</option>
              <option value="oldest">Oldest</option>
              <option value="youngest">Youngest</option>
              <option value="day">Day Events</option>
              <option value="night">Night Events</option>
            </select>
          </section>

          <button className="btn btn-primary mx-5" onClick={handleLogout}>
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
