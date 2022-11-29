import React from "react";

function NavBar(storedToken) {
  return (
    <div>
      {storedToken.storedToken ? (
        <a href="/">Home</a>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
}

export default NavBar;
