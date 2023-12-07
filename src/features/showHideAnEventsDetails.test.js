import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;

    given("the user has opened the app", async () => {
      AppComponent = render(<App />);
    });

    when("the events are displayed", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      // Wait for events to be rendered
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("the event details is hidden", () => {
      const AppDOM = AppComponent.container.firstChild;

      // Check that event details are not present
      const eventDetails = AppDOM.querySelector(".event .details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the events are displayed", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      // Wait for events to be rendered
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    when("user clicks on the Show details button", async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const showDetailsButton = AppDOM.querySelector(".details-btn");
      await user.click(showDetailsButton);
    });

    then(`the event details is displayed`, () => {
      const AppDOM = AppComponent.container.firstChild;

      // Check that event details are not present
      const eventDetails = AppDOM.querySelector(".event .details");
      expect(eventDetails).toBeInTheDocument();
    });

    test("User can collapse an event to hide details.", ({
      given,
      when,
      then,
    }) => {
      let AppComponent;
      let button;
      given("the event details is displayed", async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });

        button = AppComponent.queryAllByText("Show details")[0];
        await userEvent.click(button);

        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector(".details");
        expect(details).toBeInTheDocument();
      });

      when("the user clicks on the Hide details button", async () => {
        const AppDOM = AppComponent.container.firstChild;
        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });

        const user = userEvent.setup();
        const hideDetailsButton =
          AppComponent.queryAllByText("Hide details")[0];
        await user.click(hideDetailsButton);
      });

      then("the event details is collaspsed", () => {
        const AppDOM = AppComponent.container.firstChild;

        // Check that event details are now hidden
        const eventDetails = AppDOM.querySelector(".event .details");
        expect(eventDetails).not.toBeInTheDocument();
      });
    });
  });
});
