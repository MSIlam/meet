import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("contains an element with the role of the textbox", () => {
    render(<NumberOfEvents />);
    const textBoxElement = screen.getByPlaceholderText("number of events");
    expect(textBoxElement).toBeInTheDocument();
  });

  test("has a default value of 32", () => {
    render(<NumberOfEvents />);
    const textBoxElement = screen.getByPlaceholderText("number of events");
    expect(textBoxElement).toHaveValue(32);
  });

  test("changes value when user types in it", async () => {
    render(<NumberOfEvents />);
    const textBoxElement = screen.getByPlaceholderText("number of events");

    // Simulate typing '50' into the textbox
    await fireEvent.change(textBoxElement, { target: { value: "50" } });

    expect(textBoxElement).toHaveValue(50);
  });
});
