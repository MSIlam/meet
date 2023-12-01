import EventList from "../components/EventList";
import { getEvents } from "../api";
import { render } from "@testing-library/react";

describe("<EventList /> component", () => {
  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    const { getAllByRole } = render(<EventList events={allEvents} />);
    expect(getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});
