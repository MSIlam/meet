// src/__test__/EventList.test.js

import { render } from "@testing-library/react";
import { getEvents } from "../api";
import EventList from "../components/EventList";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    const listItems = await EventListComponent.findAllByRole("listitem");
    expect(listItems).toHaveLength(allEvents.length);
  });
});
