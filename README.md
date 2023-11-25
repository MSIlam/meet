# meet
 
## Objective
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Project requirements
### Key features: Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details
### Technical requirements:
- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on mobile.
- The app must be deployed on GitHub Pages.
- The app must implement an alert system using an OOP approach to show information to the user.
- The app must make use of data visualization.
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online performance monitoring tool.
### App features & User stories
#### Test scenerios: Gerkins syntax
Feature: Filter Events by City As a user of the Meet App, I want to be able to filter events by city, So that I can see a list of events taking place in a specific city.

@ Scenario: Show/Hide Event Details Given an event element is collapsed by default When I view the events Then I should see collapsed event details

Given I can expand an event to see details
When I click to expand an event
Then I should see the expanded event details

Given I can collapse an event to hide details
When I click to collapse an event
Then I should see the event details collapsed
@ Scenario: Specify Number of Events Given I haven't specified a number When I view the events Then I should see 32 events displayed by default

Given I can change the number of events displayed
When I specify a different number of events
Then I should see the specified number of events
@ Scenario: Use the App When Offline Given there's no internet connection When I view the events Then I should see cached data

Given there's no internet connection
When I change search settings (city, number of events)
Then I should see an error message
@ Scenario: Add an App Shortcut to the Home Screen Given I can install the Meet App as a shortcut When I add the app to my device's home screen Then I should see the Meet App shortcut

@ Scenario: Display Charts Visualizing Event Details Given I view the events When I explore the charts section Then I should see a chart with the number of upcoming events in each city.

### Use of serverless functions
In the Meet app, serverless functions will be essential for managing authorization to access public calendar events via the Google Calendar API. Users must have proper authorization to fetch event data for display in the React app. Serverless functions serve as a streamlined solution compared to maintaining a complete server, efficiently handling the task of generating and delivering access tokens. This approach ensures secure interaction with the Google Calendar API. The implementation of these serverless functions will rely on AWS Lambda as the selected cloud-service provider, enhancing the app's scalability and cost efficiency in terms of architecture.