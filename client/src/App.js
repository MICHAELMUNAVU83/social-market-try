import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [currrentUserName, setCurrentUserName] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    console.log(storedToken);
    if (storedToken) {
      fetch("/api/v1/profile ", {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCurrentUserName(data.user.username);

          setCurrentUserId(data.user.id);
        });
    }
  }, [storedToken]);

  return (
    <div>
      <Router>
        <NavBar storedToken={storedToken} />
        <Routes>
          {storedToken ? (
            <Route
              path="/"
              element={
                <Hello
                  setStoredToken={setStoredToken}
                  currrentUserName={currrentUserName}
                  currentUserId={currentUserId}
                />
              }
            />
          ) : (
            <Route
              path="/"
              element={<SignUp setStoredToken={setStoredToken} />}
            />
          )}
          <Route
            path="/login"
            element={<Login setStoredToken={setStoredToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
