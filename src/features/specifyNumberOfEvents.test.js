import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("Number of events text box is rendered with default value", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user opens the app", () => {
      AppComponent = render(<App />);
    });

    when("the main page is displayed", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      // Wait for events to be rendered
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then(
      `the user should see a text box labeled "Number of Events" with the default value "32"`,
      async () => {
        const AppDOM = AppComponent.container.firstChild;
        const noeInput = AppDOM.querySelector(".number-of-events-input");
        expect(noeInput.value).toBe("32");
      }
    );
  });

  test("User can change the number of events", ({ given, when, then, and }) => {
    let AppComponent;
    given("the user is on the main page", () => {
      AppComponent = render(<App />);
    });

    when(
      `the user types a new number in the "Number of Events" text box`,
      async () => {
        const user = userEvent.setup();
        const AppDOM = AppComponent.container.firstChild;
        const noeInput = AppDOM.querySelector(".number-of-events-input");
        await user.clear(noeInput);
        await user.type(noeInput, "1");
      }
    );

    then("the text box value should change accordingly", () => {
      const AppDOM = AppComponent.container.firstChild;
      const noeInput = AppDOM.querySelector(".number-of-events-input");
      expect(noeInput.value).toBe("1");
    });

    and("the current number of events should be updated", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      // Wait for events to be rendered
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(1);
      });
    });
  });
});
