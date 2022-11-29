import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EachCategory() {
  const params = useParams();

  const [vendorCategory, setVendorCategory] = useState({});
  useEffect(() => {
    fetch(`/api/v1/vendor_categories/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVendorCategory(data);
      });
  }, [params.id]);

  const eachVendorCategory = (
    <div>
      <p>{vendorCategory.category}</p>
      <p>{vendorCategory.vendor_passes_per_slot}</p>
      <Link to={`/add-reservation/${vendorCategory.id}`}>Reserve</Link>
    </div>
  );

  return (
    <div>
      EachCategory
      {eachVendorCategory}
    </div>
  );
}

export default EachCategory;
