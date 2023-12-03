// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(value);
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
        htmlFor="number-of-events-input"
        style={{ color: "Honeydew", marginBottom: "10px" }}
      >
        Number of Events:{" "}
      </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
