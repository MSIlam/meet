// src/__tests__/App.test.js

import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import App from "../App";

describe("<App /> component", () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = render(<App />);
  });

  test("renders list of events", () => {
    expect(
      renderedApp.container.querySelector("#event-list")
    ).toBeInTheDocument();
  });

  test("renders CitySearch", () => {
    expect(
      renderedApp.container.querySelector("#city-search")
    ).toBeInTheDocument();
  });

  test("renders NumberOfEvents", () => {
    expect(
      renderedApp.container.querySelector("#number-of-events")
    ).toBeInTheDocument();
  });
});

describe("<App /> integration", () => {
  test("renders a list of events matching the city selected by the user", async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

    await userEvent.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem =
      within(CitySearchDOM).queryByText("Berlin, Germany");
    await userEvent.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole("listitem");

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      (event) => event.location === "Berlin, Germany"
    );

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
    allRenderedEventItems.forEach((event) => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });

  test("selected number of events by the user are rendered", async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
    const NumberOfEventsInput =
      within(NumberOfEventsDOM).queryByRole("textbox");

    await userEvent.type(NumberOfEventsInput, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole("listitem");
    expect(allRenderedEventItems.length).toEqual(10);
  });
});
