import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <p>{event.name}</p>
      <Link to={`/events/${event.id}`}>Show</Link>
    </div>
  ));

  return (
    <div>
      Events
      {AllEvents}
    </div>
  );
}

export default Events;
