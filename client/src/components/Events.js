import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/api/v1/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);
  console.log(events);
  const AllEvents = events.map((event) => (
    <SplideSlide>
      <div>
        <img src={event.event_poster} alt="event poster" />
        <p>{event.name}</p>
        Date of Event: {event.date}
        <br />
        <Link to={`/events/${event.id}`}>Show</Link>
      </div>
    </SplideSlide>
  ));

  return (
    <div>
      <h3 className="text-center">Events</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          autoplay: false,
          speed: 8000,
          pagination: false,
          type: "loop",
          interval: 6000,
          rewindByDrag: true,
          drag: "free",
          gap: "2rem",
        }}
        aria-label="My Favorite Images"
      >
        {AllEvents}
      </Splide>
    </div>
  );
}

export default Events;
