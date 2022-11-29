import React from "react";

function NavBar(storedToken) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    storedToken.setStoredToken("");
  };

  return (
    <div>
      {storedToken.storedToken ? (
        <nav>
          <a href="/">Home</a>
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
