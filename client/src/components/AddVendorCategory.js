import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AddVendorCategory() {
  const params = useParams();
  const [category, setCategory] = useState("");
  const [vendorPassesPerSlot, setVendorPassesPerSlot] = useState("");
  const [ammenities, setAmmenities] = useState("");
  const [cost, setCost] = useState("");

  return (
    <div>
      AddVendorCategory
      <form onSubmit={addVendorCategory}>
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label>Vendor Passes Per Slot</label>
        <input
          type="text"
          value={vendorPassesPerSlot}
          onChange={(e) => setVendorPassesPerSlot(e.target.value)}
        />
        <label>Ammenities</label>
        <input
          type="text"
          value={ammenities}
          onChange={(e) => setAmmenities(e.target.value)}
        />
        <label>Cost</label>
        <input
          type="text"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddVendorCategory;
