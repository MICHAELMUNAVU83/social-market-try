import React, { useState } from "react";
import { useParams } from "react-router-dom";

function AddReservation({ currentUserId }) {
  const params = useParams();
  const [name, setName] = useState("");

  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  console.log(currentUserId);
  const addReservationAction = (e) => {
    e.preventDefault();
    fetch("/api/v1/reservations", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone_number: phone_number,
        email: email,
        user_id: currentUserId,
        vendor_category_id: Number(params.id),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const addReservationDiv = (
    <div>
      <form onSubmit={addReservationAction}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
  return (
    <div>
      AddReservation
      {addReservationDiv}
    </div>
  );
}

export default AddReservation;
