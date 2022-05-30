# Sky Betting & Gaming Tech Test

## Setup

Ensure Docker, NodeJS (and optionally Yarn) are all installed and running on your machine.

1. Run `yarn` (or `npm install`).
2. Run `docker-compose up -d`.
3. Run `yarn start` (or `npm start`).

## Test

1. Ensure the docker container (image `sbgtechtest/api:2.0.0`, ports: `8888-8890:8888-8890`) is not running.
2. Run `yarn test`.

## Using the App

After launching the app, you will come across a simple home screen with a Navigation bar to the left. You will also see a toggle switch to the top right.

1. Select 'Football' on the left to see all live football events
2. Click anywhere on the accordion (that isn't text) event to drop down the primary market information
3. Click anywhere on the accordion text to drill down into the event details
4. Similarly to 2, you can click on the event markets accordion to see the outcomes
5. Toggle the top right switch to change the odds between fractional and decimal

## Covering note

### Language choice

I chose to use Javascript with React as my language/library/framework with a CRA (create-react-app) boilerplate because I have the most experience with it (4 years) and I am confident it is one of the stronger Javascript libraries/frameworks; documentation is solid, community support surrounding it is massive and the framework itself is flexible and dynamic.

### Concepts

I decided to used functional-based React with a strong approach to hooks instead of classes. I have written custom hooks to handle the websocket/API calls as well as some other smaller functionalities. I prefer to use hooks/functions as I not only have more experience in them, but I believe they are cleaner, less confusing, strongly encouraged by the developers themselves and more effecient (as well as following JavaScript's own functional nature). State management is simpler and more effective, and the use of hooks is introduced which allows for a more direct approach to basic React concepts (state, refs, useEffect, useCallback).

### State management

I chose to use Context as the state management for this project, as I believe Context is fully capable of handling the data coming in without the need for a complicated, 3rd-party state managment package. Context is simple, effect and I believe can be used in most scenarios and comes packaged with React.

### Styling

I chose to use CSS in JS in the form of `styled-components`. It is easier to handle changes to styling via the use of props, reduces the use of importing css files into js files and allows me to keep the styles closely coupled with each component. I could also pass in a ThemeProvider to further help the handling of multiple themes within the project, although I chose not to due to time constraints.

### Routing

I used the standard `react-router-dom` for navigational purposes. It is effective, reliable and has plenty of documentation and community support surrounding it.

### Unit Testing

I stuck with `jest` and `@testing-library/react` for testing purposes as they come straight out of the CRA box. Testing library was developed for testing more 'user-driven' scenarios (i.e., a user clicks a button and sees a header, instead of which props where passed where), which makes more sense when unit testing a front-end project.

### Why didn't I use TypeScript

Mainly because of time constraints. I wanted to complete the task as quickly as possible and was uncertain whether using TS would take me longer, especially with the use of WebSockets, as it is aconcept I have never worked with before.
