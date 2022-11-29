import React, { useEffect, useState } from "react";

function Hello({ setStoredToken, currrentUserName, currentUserId }) {
  return (
    <div>
      Hello {currrentUserName}! with id {currentUserId}
      <button
        onClick={() => {
          localStorage.setItem("token", null);
          setStoredToken(null);
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Hello;
