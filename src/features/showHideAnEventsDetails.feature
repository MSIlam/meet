Feature: Show/Hide event details
    Scenario: An event element is collapsed by default.
        Given the user has opened the app
        When the events are displayed
        Then the event details is hidden

    Scenario: User can expand an event to see its details.
        Given the events are displayed
        When user clicks on the Show details button
        Then the event details is displayed

    Scenario: User can collapse an event to hide details.
        Given the event details is displayed
        When the user clicks on the Hide details button
        Then the event details is collaspsed