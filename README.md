# MEETBIT App
 This application is a serverless, progressive web app (PWA) developed with React, employing a test-driven development (TDD) approach. It utilizes the Google Calendar API to retrieve upcoming events.

## App features & User stories
### Feature 1: Filter events by city
- Scenario: When user hasn't searched for a city, show upcoming events from all cities.

**Given** user hasn't searched for any city
**When** the user opens the app
**Then** the user should see the list of all upcoming events.

- Scenario: User should see a list of suggestions when they search for a city.

**Given** the main page is open
**When** user starts typing in the city textbox
**Then** the user should recieve a list of cities (suggestions) that match what they've typed

- Scenario: User can select a city from the suggested list.

**Given** user was typing "Berlin" in the city textbox
        And the list of suggested cities is showing
**When** the user selects a city (e.g., "Berlin, Germany") from the list
**Then** their city should be changed to that city (i.e., "Berlin, Germany")
**And** the user should receive a list of upcoming events in that city
### Feature 2: Show/Hide event details
- Scenario: An event element is collapsed by default.

**Given** the user has opened the app
**When** the events are displayed
**Then** the event details is hidden

- Scenario: User can expand an event to see its details.

**Given** the events are displayed
**When** user clicks on the Show details button
**Then** the event details is displayed

- Scenario: User can collapse an event to hide details.

    **Given** the event details is displayed
    **When** the user clicks on the Hide details button
    **Then** the event details is collaspsed
### Feature 3: Update Number of Events
- Scenario: Number of events text box is rendered with default value

**Given** the user opens the app
**When** the main page is displayed
**Then** the user should see a text box labeled "Number of Events" with the default value "32"

- Scenario: User can change the number of events

**Given** the user is on the main page
**When** the user types a new number in the "Number of Events" text box
**Then** the text box value should change accordingly 
**And** the current number of events should be updated

### Feature 4: Use the App when offline


- Scenario 1: Notify the user that there user is offline

**Given** the user has no internet connection 
**When** user opens the app 
**Then** an alert should appear telling the user is offline
- Scenario 2: Show cached data when there’s no internet connection

**Given** the user has no internet connection 
**When** the user opens the app 
**Then** the previously stored data from local storage should be displayed

### Feature 5: Visualize data with chart

- Scenario 1: Show a chart with the number of upcoming events in each city

**Given** the user has not looked for a specific city 
**When** the user opens the app 
**Then** the user should see a graph displaying the number of upcoming events in each city.

- Scenario 2: Show a chart with the tech events occuring a
**Given** the user has not looked for a specific city 
**When** the user opens the app 
**Then** the user should see a graph displaying the number of upcoming events in each city.

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

### Use of serverless functions
In the Meet app, serverless functions is essential for managing authorization to access public calendar events via the Google Calendar API. Users must have proper authorization to fetch event data for display in the React app. Serverless functions serve as a streamlined solution compared to maintaining a complete server, efficiently handling the task of generating and delivering access tokens. This approach ensures secure interaction with the Google Calendar API. The implementation of these serverless functions will rely on AWS Lambda as the selected cloud-service provider, enhancing the app's scalability and cost efficiency in terms of architecture.
### Screenshots
<p align="center">
<img src="https://github.com/MSIlam/meet-app-mi/assets/43422503/eefe24bf-5c3c-460d-97a9-7dbec4881cea" alt="meet Screenshot 1" width="650" style="margin-right: 20px;">
<img src="https://github.com/MSIlam/meet-app-mi/assets/43422503/14e6cef4-939a-4b4a-8ea1-f96c4aedee5e" alt="Chat Screenshot 3" width="500">
<img src="https://github.com/MSIlam/meet-app-mi/assets/43422503/667c8224-84fe-46a1-8884-22cc57f385b6" alt="Chat Screenshot 2" width="150" style="margin-right: 20px;">

</p>
### Tech stack
- React
- Jest
- Jest-Cucumber
- Puppeteer
- React toastify
- AWS lambda
- Google Calender API
- Atatus

## Link: https://msilam.github.io/meet/
