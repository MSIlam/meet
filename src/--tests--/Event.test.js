// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Event from "../components/Event";

// describe("<Event /> component", () => {
//   let sampleEvent;

//   beforeEach(() => {
//     sampleEvent = {
//       summary: "Sample Event",
//       start: {
//         dateTime: new Date().toISOString(),
//       },
//       location: "Sample Location",
//       description: "Sample Description",
//     };
//   });

//   test("renders event title", () => {
//     render(<Event event={sampleEvent} />);
//     const titleElement = screen.getByText("Sample Event");
//     expect(titleElement).toBeInTheDocument();
//   });

//   test("renders event start time", () => {
//     render(<Event event={sampleEvent} />);
//     const startTimeElement = screen.getByText(
//       `Start Time: ${new Date(sampleEvent.start.dateTime).toLocaleString()}`
//     );
//     expect(startTimeElement).toBeInTheDocument();
//   });

//   test("renders event location", () => {
//     render(<Event event={sampleEvent} />);
//     const locationElement = screen.getByText("Location: Sample Location");
//     expect(locationElement).toBeInTheDocument();
//   });

//   test("by default, events details section should be hidden", () => {
//     render(<Event event={sampleEvent} />);
//     const detailsElement = screen.queryByText(sampleEvent.description);
//     expect(detailsElement).not.toBeInTheDocument();
//   });

//   test("shows the details when the user clicks on 'Show Details' button", () => {
//     render(<Event event={sampleEvent} />);
//     const showDetailsButton = screen.getByText("Show Details");

//     fireEvent.click(showDetailsButton);

//     const detailsElement = screen.getByText(sampleEvent.description);
//     expect(detailsElement).toBeInTheDocument();
//     expect(showDetailsButton).toHaveTextContent("Hide Details");
//   });

//   test("hides the details when the user clicks on 'Hide Details' button", () => {
//     render(<Event event={sampleEvent} />);
//     const showDetailsButton = screen.getByText("Show Details");

//     fireEvent.click(showDetailsButton);

//     const hideDetailsButton = screen.getByText("Hide Details");
//     fireEvent.click(hideDetailsButton);

//     const detailsElement = screen.queryByText(sampleEvent.description);
//     expect(detailsElement).not.toBeInTheDocument();
//     expect(showDetailsButton).toHaveTextContent("Show Details");
//   });
// });

// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import Event from "../components/Event";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders event Title", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText("show details"));

    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
    expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("show details")).not.toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = userEvent.setup();

    await user.click(EventComponent.queryByText("show details"));
    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
    expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("show details")).not.toBeInTheDocument();

    await user.click(EventComponent.queryByText("hide details"));
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
    expect(EventComponent.queryByText("hide details")).not.toBeInTheDocument();
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });
});
