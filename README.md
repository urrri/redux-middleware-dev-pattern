## Redux Middleware pattern

In this project I attempt to introduce a pattern inspired by [Nir Kaufman's book - Thinking in Redux](https://leanpub.com/thinking-in-Redux)
### This pattern has few ground rules:

- Devide redux folder from your UI - to be able to replace your framework easily.
- Reducers are stupid and has no logic
- Actions creators are stupid and has no logic
- All the logic should be placed in middlewares
- Every feature <b>responsible to change</b> to it's own state
- All features can <b>read</b> the state and use it 
- Actions Types are in a single file

## Project setup
```
yarn
```

### Runs the app in the development mode (multiple projects)
```
npm run vue
npm run react
npm run angular
```

## About the app

The app is pretty stupid, Created just to introduce this pattern, it basically 
uses [TvMaze API](http://www.tvmaze.com/) to search and present data about tv-shows

Don't be lazy, Run it !
