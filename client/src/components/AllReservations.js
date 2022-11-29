import React, { useEffect, useState } from "react";
function AllReservations() {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    fetch("/api/v1/reservations")
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        console.log(data);
      });
  }, []);
  const allReservations = reservations.map((reservation) => (
    <div>
      This is a reservation for {reservation.name} at {reservation.event.name} by {reservation.user.username}
    </div>
  ));

  return (
    <div>
      AllReservations
      {reservations.length > 0 ? allReservations : "No reservations"}
    </div>
  );
}

export default AllReservations;
