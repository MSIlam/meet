import React, { useState } from "react";

const NumberOfEvents = ({ onEventNumberChange }) => {
  const [number, setNumber] = useState(32);

  const handleNumberChange = (event) => {
    const value = event.target.value;
    setNumber(value);

    // If a callback function is provided, call it with the parsed integer value
    if (onEventNumberChange) {
      const intValue = parseInt(value, 10);
      onEventNumberChange(isNaN(intValue) ? null : intValue);
    }
  };

  return (
    <div id="event-number">
      <label htmlFor="numberInput">Number of Events:</label>
      <input
        type="number"
        className="numberEvent"
        placeholder="number of events"
        value={number}
        onChange={handleNumberChange}
      />
    </div>
  );
};

export default NumberOfEvents;
