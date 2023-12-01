import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Event from "../components/Event";

describe("<Event /> component", () => {
  let sampleEvent;

  beforeEach(() => {
    sampleEvent = {
      summary: "Sample Event",
      start: {
        dateTime: new Date().toISOString(),
      },
      location: "Sample Location",
      description: "Sample Description",
    };
  });

  test("renders event title", () => {
    render(<Event event={sampleEvent} />);
    const titleElement = screen.getByText("Sample Event");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders event start time", () => {
    render(<Event event={sampleEvent} />);
    const startTimeElement = screen.getByText(
      `Start Time: ${new Date(sampleEvent.start.dateTime).toLocaleString()}`
    );
    expect(startTimeElement).toBeInTheDocument();
  });

  test("renders event location", () => {
    render(<Event event={sampleEvent} />);
    const locationElement = screen.getByText("Location: Sample Location");
    expect(locationElement).toBeInTheDocument();
  });

  test("by default, events details section should be hidden", () => {
    render(<Event event={sampleEvent} />);
    const detailsElement = screen.queryByText(sampleEvent.description);
    expect(detailsElement).not.toBeInTheDocument();
  });

  test("shows the details when the user clicks on 'Show Details' button", () => {
    render(<Event event={sampleEvent} />);
    const showDetailsButton = screen.getByText("Show Details");

    fireEvent.click(showDetailsButton);

    const detailsElement = screen.getByText(sampleEvent.description);
    expect(detailsElement).toBeInTheDocument();
    expect(showDetailsButton).toHaveTextContent("Hide Details");
  });

  test("hides the details when the user clicks on 'Hide Details' button", () => {
    render(<Event event={sampleEvent} />);
    const showDetailsButton = screen.getByText("Show Details");

    fireEvent.click(showDetailsButton);

    const hideDetailsButton = screen.getByText("Hide Details");
    fireEvent.click(hideDetailsButton);

    const detailsElement = screen.queryByText(sampleEvent.description);
    expect(detailsElement).not.toBeInTheDocument();
    expect(showDetailsButton).toHaveTextContent("Show Details");
  });
});
