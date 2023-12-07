import Event from "./Event";
import "./EventList.css";

const EventList = ({ events }) => {
  return (
    <ul id="event-list" style={{ listStyleType: "none", padding: 0 }}>
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </ul>
  );
};

export default EventList;
