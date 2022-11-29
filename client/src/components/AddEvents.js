import React from "react";
import { useState } from "react";

function AddEvents() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [event_poster, setEvent_poster] = useState("");
  const [gender, setGender] = useState("");
  const [average_age, setAverage_age] = useState("");
  const [number_of_attendees, setNumber_of_attendees] = useState("");

  const addAnEvent = (e) => {
    e.preventDefault();
    fetch("/api/v1/events", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        artists: artists,
        date: date,
        venue: venue,
        event_poster: event_poster,
        highest_gender_represented: gender,
        average_age: average_age,
        number_of_attendees: number_of_attendees,
      }),
    });
    
  };

  return (
    <div>
      AddEvents
      <form onSubmit={addAnEvent}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Artists</label>
        <input
          type="text"
          name="artists"
          value={artists}
          onChange={(e) => setArtists(e.target.value)}
        />
        <label>Date</label>
        <input
          type="text"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Venue</label>
        <input
          type="text"
          name="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
        <label>Event Poster</label>
        <input
          type="text"
          name="event_poster"
          value={event_poster}
          onChange={(e) => setEvent_poster(e.target.value)}
        />
        <label>gender</label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Average Age</label>
        <input
          type="text"
          name="average_age"
          value={average_age}
          onChange={(e) => setAverage_age(e.target.value)}
        />
        <label>Number of Attendees</label>
        <input
          type="text"
          name="number_of_attendees"
          value={number_of_attendees}
          onChange={(e) => setNumber_of_attendees(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEvents;
