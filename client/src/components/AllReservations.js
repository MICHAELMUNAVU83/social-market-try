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
    <div className="card my-4">
      <div className="card-header text-center">
        Here are the details of your vending reservation for User{" "}
        {reservation.name} with phone number {reservation.phone_number}
      </div>
      <div className="d-flex justify-content-center  container">
        <div className="card-body">
          <h5 className="card-title">
            <span>Event: </span>
            {reservation.event.name}
          </h5>
          <p className="card-text">
            <span>Event Date: </span>
            {reservation.event.date}
          </p>
          <p className="card-text">
            <span>Event Venue : </span>
            {reservation.event.venue}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>Vending Category: </span>
            {reservation.vendor_category.category}
          </h5>
          <p className="card-text">
            <span>Vendor Passes: </span>
            {reservation.vendor_category.vendor_passes_per_slot}
          </p>
          <p className="card-text">
            <span>Ammenities: </span>
            {reservation.vendor_category.amenities_provided}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card-footer text-center text-muted">
        Contact {reservation.name} the reservation fee of{" "}
        {reservation.vendor_category.cost_per_slot}
      </div>
    </div>
  ));

  return (
    <div className="container">
      {reservations.length > 0 ? allReservations : "No reservations"}
    </div>
  );
}

export default AllReservations;
