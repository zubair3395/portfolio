const reactRedux = [
  {
    id: "0",
    title: "Why we use Redux?",
    description:
      "Redux is used for state management. Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other.",
    show: "none",
  },
  {
    id: "1",
    title: "Create a Redux Store",
    description:
      "Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.",
    show: "none",
  },
  {
    id: "2",
    title: "Action",
    description:
      "Actions are JavaScript object that contains information. Actions are the only source of information for the store. It basically carries a payload of information from the application to the store. It only tells us what has happened.  Actions have a type property that they must include as type property tells what kind of action to perform. Action can also contain the payload(data field in the action) to describe the action.",
    show: "none",
  },
  {
    id: "3",
    title: "Reducer",
    description:
      "In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state. These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state. This updated state is sent back to the view components of the react to make the necessary changes. Basically, In short, we can say that Reducer’s work is to return the updated state and to also describe how the state changes.",
    show: "none",
  },
  {
    id: "4",
    title: "middleware",
    description:
      "Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.",
    show: "none",
  },
  {
    id: "5",
    title: "Thunk Middleware",
    description:
      "It allows us to return functions instead of objects from redux actions. Plain redux doesn’t allow complex logic inside action functions, you can only perform simple synchronous updates by dispatching actions. This middleware extends its ability and lets you write complex logic that interacts with the store. Thunk doesn’t interfere with the action until it returns a function. Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action",
    show: "none",
  },
  {
    id: "6",
    title: "Provider",
    description:
      "The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.",
    show: "none",
  },
];
export default reactRedux;
