import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Events from "./components/Events";
import EachEvent from "./components/EachEvent";
import AddEvents from "./components/AddEvents";
import AddVendorCategory from "./components/AddVendorCategory";
import EachCategory from "./components/EachCategory";
import MyReservations from "./components/MyReservations";
import AllReservations from "./components/AllReservations";
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
        <NavBar
          storedToken={storedToken}
          setStoredToken={setStoredToken}
          currrentUserName={currrentUserName}
          currentUserId={currentUserId}
        />
        {storedToken ? (
          <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/events/:id" element={<EachEvent />} />
            <Route path="/add-events" element={<AddEvents />} />
            <Route path="/my-reservations" element={<MyReservations currrentUserName={currrentUserName} currentUserId={currentUserId} />} />
            <Route path="/all-reservations" element={<AllReservations />} />
            <Route
              path="/add-vendor-category/:id"
              element={<AddVendorCategory />}
            />
            <Route path="/vendor_categories/:id" element={<EachCategory />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<SignUp setStoredToken={setStoredToken} />}
            />

            <Route
              path="/login"
              element={<Login setStoredToken={setStoredToken} />}
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
