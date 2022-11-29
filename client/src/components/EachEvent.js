import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function EachEvent({ currentUserName }) {
  const params = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    fetch(`/api/v1/events/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvent(data);
        console.log(currentUserName);
      });
  }, [params.id]);

  const eachEvent = (
    <div>
      <p>{event.name}</p>
      <p>{event.artists}</p>
    </div>
  );
  const eventVendorCategories = event.vendor_categories?.map(
    (eventVendorCategory) => (
      <div>
        <p>{eventVendorCategory.category}</p>
        <p>{eventVendorCategory.vendor_passes_per_slot}</p>
        <Link to={`/vendor_categories/${eventVendorCategory.id}`}> Show</Link>
      </div>
    )
  );
  return (
    <div>
      EachEvent
      {eachEvent}
      event category details
      {eventVendorCategories}
      {currentUserName === "admin" ? (
        <Link to={`/add-vendor-category/${params.id}`}>
          Add Vendor Category
        </Link>
      ) : null}
    </div>
  );
}

export default EachEvent;
