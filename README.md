# Sky Betting & Gaming Tech Test

## Setup

Ensure Docker, NodeJS (and optionally Yarn) are all installed and running on your machine.

1. Run `yarn` (or `npm install`).
2. Run `docker-compose up -d`.
3. Run `yarn start` (or `npm start`).

## Test

1. Ensure the docker container (image `sbgtechtest/api:2.0.0`, ports: `8888-8890:8888-8890`) is not running.
2. Run `yarn test`.

## Covering note

### Language choice

I chose to use Javascript with React as my language/library/framework with a CRA (create-react-app) boilerplace. I used React because I have the most experience with it (4 years now) and I am confident it is one of the strongest Javascript libraries/frameworks going as the documentation is strong and the community support surrounding it is massive.

### Concepts

I decided to used functional-based React with a strong approach to hooks instead of classes. I have written custom hooks to handle the websocket/API calls as well as some other smaller functionalities. I prefer to use hooks/functions as I not only have more experience in them, but I believe they are cleaner, less confusing, strongly encouraged by the developers themselves and more effecient (as well as following JavaScript's own functional nature). State management is simpler and more effective, and the use of hooks is introduced which allows for a more direct approach to basic React concepts (state, refs, useEffect, useCallback).

### State management

I chose to use Context as the state management for this project, as I believe Context is fully capable of handling the data coming in without the need for a complicated, 3rd-party state managment package. Context is simple, effect and I believe can be used in most scenarios and comes packaged with React.

### Styling

I chose to use CSS in JS in the form of `styled-components`. It is easier to handle changes to styling via the use of props, reduces the use of importing css files into js files and allows me to keep the styles closely coupled with each component. I could also pass in a ThemeProvider to further help the handling of multiple themes within the project, although I chose not to due to time constraints.

### Why didn't I use TypeScript

Mainly because of time constraints. I wanted to complete the task as quickly as possible and was uncertain whether using TS would take me longer, especially with the use of WebSockets, as it is aconcept I have never worked with before.
