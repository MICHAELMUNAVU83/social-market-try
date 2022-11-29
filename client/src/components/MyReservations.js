import React, { useEffect, useState } from "react";

function MyReservations({ currrentUserName, currentUserId }) {
  console.log(currrentUserName, currentUserId);
  const [reservations, setReservations] = useState([]);
  useEffect(() => {

    fetch(`/api/v1/reservations/${currentUserId}`)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        console.log(data);
      });
  }, [currentUserId]);
  const MyReservations = reservations.map((reservation) => (
    <div>
      <p>{reservation.name}</p>
    </div>
  ));

  return (
    <div>
      MyReservations
      {reservations.length > 0 ? MyReservations : "No reservations"}
   
      <button onClick={() => console.log(reservations)}>Click</button>
    </div>
  );
}

export default MyReservations;
