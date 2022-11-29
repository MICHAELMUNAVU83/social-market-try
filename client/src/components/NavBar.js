import React from "react";

function NavBar(storedToken) {
 

  return (
    <div>
      {storedToken.storedToken ? (
        <nav>
          <a href="/">Home</a>
          Welcome {storedToken.currrentUserName}!
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
