import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../Events.css";

function Events({ currentUserName }) {
  const [events, setEvents] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    fetch("/api/v1/events")
      .then((response) => response.json())
      .then((data) => {
        if (!filterQuery) {
          setEvents(data);
        } else {
          setEvents(
            data.filter((event) =>
              event.name.toLowerCase().includes(filterQuery.toLowerCase())
            )
          );
        }
      });
  }, [filterQuery]);
  const handleDelete = (id) => {
    fetch(`/api/v1/events/${id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setEvents(data);
      });
    });
    alert("Event deleted");
  };

  const AllEvents = events.map((event) => (
    <SplideSlide>
      <div className="events-card-hover card" style={{ width: "20rem" }}>
        <img className="card-img-top" src={event.event_poster} alt="Card " />
        <div className="card-body">
          <h4 className="card-title">{event.name}</h4>
          <p className="card-text">Date of Event: {event.date}</p>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-primary text-center"
              to={`/events/${event.id}`}
            >
              See Event
            </Link>
          </div>
          {currentUserName === "admin" ? (
            <div className="d-flex justify-content-center my-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(event.id)}
              >
                Delete Event
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </SplideSlide>
  ));

  return (
    <div>
      <h3 className="text-center">Events</h3>
      <small>Search for specific events</small>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Search for an event"
          onChange={(e) => {
            setFilterQuery(e.target.value);
            console.log(filterQuery);
          }}
          className="form-control"
        />
      </div>
      <hr></hr>
      <Splide
        className="container"
        options={{
          perPage: 2,
          arrows: false,
          autoplay: true,
          speed: 10000,
          pagination: false,

          interval: 6000,
          rewindByDrag: true,
          drag: "free",
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        {events.length > 0 ? AllEvents : <h3>No Events Found</h3>}
      </Splide>
    </div>
  );
}

export default Events;
