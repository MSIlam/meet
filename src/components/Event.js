// src/components/Event.js

import { useState } from "react";
import Card from "react-bootstrap/Card";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li role="listitem">
      <Card
        className="event shadow"
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
          maxWidth: "80%",
          backgroundColor: "Honeydew",
        }}
      >
        <Card.Body>
          <div style={{ textAlign: "left" }}>
            <Card.Title>{event && event.summary}</Card.Title>
            <Card.Text>{event && event.location}</Card.Text>
            <Card.Text>
              {event && new Date(event.start.dateTime).toUTCString()}
            </Card.Text>
            {showDetails ? (
              <p className="details">{event && event.description}</p>
            ) : null}
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              className="details-btn"
              onClick={() => {
                showDetails ? setShowDetails(false) : setShowDetails(true);
              }}
            >
              {showDetails ? "Hide details" : "Show details"}
            </button>
          </div>
        </Card.Body>
      </Card>
    </li>
  );
};

export default Event;
