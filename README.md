# Currency Meter

## Running

Before anything run the command `npm install`.

To start the app run `npm start`. Then go to http://localhost:3000.

To build the bundle run `npm run build`.

To run the tests run `npm test`.

## Tech

- react
- webpack
- es6
- testing (karma, mocha, chai, enzyme)
- express (to proxy request through and serve homepage)

## Assumptions and Clarifications

I've written a simple react application that displays a meter component in the UI. I proxy a request through my own small server to get the data from your endpoint.

Some interesting things to note in the application:

- The meter component can render without any data. Meaning we can render the meter component while we are waiting for the data from the initial request to come back. Users don't have stare at a blank screen until the data comes back.

- The position of the meter pointer is dynamic so we make use of javascript to assign a rotation translation value. You can see this in action by clicking the `Simulate Realtime` button.

- The meter component itself is totally stateless and is only ever passed props. This makes it extremely easy to test and you can see that even though our component can render with or without passed in props and has a moving pointer, the tests for the component are very simple to write.

- There was some weird behaviour with the API endpoint where the data in the response would be wrong (e.g min would be larger then max, value not in the range of min to max). When this happens you will see the meter pointer go crazy. I just assumed that in the real world the problem would be fixed in the backend api and did not write code to defend against this.

## Enhancements

- With more time I'd like to clean up some of the css. I'd actually rather use SCSS, but just felt that wasn't necessary given it's only one component.

- I'd also clean up the build system and make it easier to develop. It's easy to start and see the app, but to develop you must run both `npm start` and `npm run build`.
