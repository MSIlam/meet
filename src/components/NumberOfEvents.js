// src/components/NumberOfEvents.js

import { useState } from "react";
// import { toast } from "react-toastify";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);
  // const [error, setError] = useState("");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    // if (isNaN(value) || value < 0) {
    //   // setError("The value cannot be a negative number!");
    //   // toast("The value must be a positive number!");
    //   return;
    // }
    let infoText;
    if (isNaN(value) || value <= 0 || value > 32) {
      infoText = "Only positive numeric values upto 32 are allowed";
    } else {
      infoText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
    setNumber(value);

    // setError("");
  };

  return (
    <div
      id="number-of-events"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        maxWidth: "200px",
      }}
    >
      <label
        htmlFor="numberEvents"
        style={{ color: "Honeydew", marginBottom: "10px" }}
      >
        Number of Events:
      </label>
      <input
        type="text"
        id="number-of-events"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
        style={{
          padding: "8px", // Added padding
          // Added font size
          border: "1px solid #ccc", // Added border
          borderRadius: "4px", // Added border radius
        }}
      />
    </div>
  );
};

export default NumberOfEvents;
