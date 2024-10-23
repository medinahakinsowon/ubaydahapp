import React, { useState } from "react";
import "./Guest.css";
import { account, database } from "../../appwrite/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Guest = () => {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [attending, setAttending] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [buyAttire, setBuyAttire] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const buyAttireBoolean = buyAttire === "yes";

    const data = {
      name: name,
      location: location,
      attending: attending,
      numberOfGuests: parseInt(numberOfGuests),
      buyAttire: buyAttireBoolean,
    };
    console.log(data);
    try {
      var guest = await database.createDocument(
        "671778520028f84c21b2",
        "671786ad001edc6e64c1",
        "unique()",
        data
      );
      // Show success toast
         toast.success("Guest information submitted successfully!");
      // Clear the form inputs
      setName("");
      setLocation("");
      setAttending(false);
      setNumberOfGuests("");
      setBuyAttire("");
      console.log(guest);
    } catch (error) {
      toast.error("Failed to submit guest information. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="guest-form">
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={attending}
            onChange={(e) => setAttending(e.target.checked)}
          />
          Will you be attending?
        </label>

        <input
          type="number"
          placeholder="How many of you are coming?"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
          min="1"
          required
        />

        <select
          value={buyAttire}
          onChange={(e) => setBuyAttire(e.target.value)}
          required
        >
          <option value="">Would you love to buy the occasion attire?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button type="submit">Submit</button>
      </form>
       {/* ToastContainer to display the toast messages */}
        <ToastContainer />
    </div>
  );
};

export default Guest;
