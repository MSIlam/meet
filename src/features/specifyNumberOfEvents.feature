Feature: Update Number of Events

    Scenario: Number of events text box is rendered with default value
        Given the user opens the app
        When the main page is displayed
        Then the user should see a text box labeled "Number of Events" with the default value "32"

    Scenario: User can change the number of events
        Given the user is on the main page
        When the user types a new number in the "Number of Events" text box
        Then the text box value should change accordingly
        And the current number of events should be updated

