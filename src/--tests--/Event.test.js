import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";

test("renders event information correctly", async () => {
  // Fetch events from the API
  const allEvents = await getEvents();
  const event = allEvents[0]; // Assuming there is at least one event

  // Render the Event component with the event data
  const { getByText } = render(<Event event={event} />);

  // Test for the event's title
  const titleElement = getByText(event.summary);
  expect(titleElement).toBeInTheDocument();

  // Test for the event's start time
  const startTimeElement = getByText(event.created);
  expect(startTimeElement).toBeInTheDocument();

  // Test for the event's location
  const locationElement = getByText(event.location);
  expect(locationElement).toBeInTheDocument();

  // Test for the show details button
  const showDetailsButton = getByText("Show Details");
  expect(showDetailsButton).toBeInTheDocument();
});
