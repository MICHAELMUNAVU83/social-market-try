import React, { useState } from "react";
import { useParams } from "react-router-dom";

function AddVendorCategory() {
  const params = useParams();
  const [category, setCategory] = useState("");
  const [vendorPassesPerSlot, setVendorPassesPerSlot] = useState("");
  const [ammenities, setAmmenities] = useState("");
  const [cost, setCost] = useState("");
  const [number_of_slots, setNumber_of_slots] = useState("");

  const vendorCategoris = [
    "Main Bar",
    " Cocktail Bar",
    " Food",
    "Soft Drinks",
    "  Hot Beverage",
    "Sheesha",
    "  Vape Pens",
    " Jaba Juice ",
    " Hangover Patches",
    "Activation Space",
    "Gaming Stations",
    " Tattoo Stations",
    " Photobooth",
    " Fashion, Clothing & Apparel",
    " Health,Beauty & Cosmetic",
    " Arts & Crafts",
    "  Home & Office Decor",
    "Body Art",
  ];

  

  const addVendorCategory = (e) => {
    e.preventDefault();
    fetch("/api/v1/vendor_categories", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        number_of_slots: number_of_slots,
        cost_per_slot: cost,
        vendor_passes_per_slot: vendorPassesPerSlot,
        amenities_provided: ammenities,
        event_id: Number(params.id),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      AddVendorCategory
      <form onSubmit={addVendorCategory}>
        <label>Category</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          {vendorCategoris.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
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
        <label>Number of Slots</label>
        <input
          type="text"
          value={number_of_slots}
          onChange={(e) => setNumber_of_slots(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddVendorCategory;
