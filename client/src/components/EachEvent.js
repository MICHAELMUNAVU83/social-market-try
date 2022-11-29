import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function EachEvent() {
  const params = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    fetch(`/api/v1/events/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvent(data);
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
      <Link to={`/add-vendor-category/${event.id}`}>Add Vendor Category</Link>
    </div>
  );
}

export default EachEvent;
