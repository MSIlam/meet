import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents, extractLocations } from "../api";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test("renders number of events text input", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("number-of-events-input");
  });

  test("default number is 32", async () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toHaveValue("32");
  });

  test("number of events text box value changes when the user types in it", async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(numberTextBox, "123");

    // 32 (the default value already written) + 123
    expect(numberTextBox).toHaveValue("32123");
  });
});

// ... your integration tests

describe("<NumberOfEvents /> integration", () => {
  test("changes the number of events in the list", async () => {
    const { getByTestId } = render(<App />);

    // Find the input field for the number of events using getByTestId
    const numberOfEventsInput = getByTestId("number-of-events-input");

    // Simulate the user changing the value of the input field
    userEvent.type(numberOfEventsInput, "10");

    // Additional assertion after the component has updated
    // For example, you can check if the event list length has changed
    await waitFor(
      () => {
        const eventList = getByTestId("event-list");
        const allRenderedEventItems =
          within(eventList).queryAllByRole("listitem");

        // Assertion based on the changed number of events
        expect(allRenderedEventItems.length).toBe(10);
      },
      { timeout: 3000 }
    ); // Adjust the timeout as needed
  });
});
