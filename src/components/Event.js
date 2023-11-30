// const Event = () => {
//   return <li></li>;
// };

// export default Event;

import React from "react";

const Event = ({ event }) => {
  if (!event || !event.summary) {
    return null; // or handle the case when event is missing or doesn't have summary
  }
  return (
    <li>
      <div>
        {/* Event Title */}
        <h2>{event.summary}</h2>
        {/* Event Start Time */}
        <p>Start Time: {new Date(event.start.dateTime).toLocaleString()}</p>
        {/* Event Location */}
        <p>Location: {event.location}</p>
        {/* "Show Details" Button */}
        <button>Show Details</button>
      </div>
    </li>
  );
};

export default Event;
