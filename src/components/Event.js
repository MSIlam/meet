import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!event || !event.summary) {
    return null; // or handle the case when event is missing or doesn't have summary
  }
  return (
    <Card className="event-card">
      <Card.Body>
        {/* Event Title */}
        <Card.Title>{event.summary}</Card.Title>
        {/* Event Start Time */}
        <Card.Text>
          Start Time: {new Date(event.start.dateTime).toLocaleString()}
        </Card.Text>
        {/* Event Location */}
        <Card.Text>Location: {event.location}</Card.Text>
        {/* "Show Details" Button */}
        <Button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
        {showDetails === true ? (
          <Card.Text>{event.description}</Card.Text>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default Event;
