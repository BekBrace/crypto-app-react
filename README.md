# Important Notes on React Hooks

## General Information

React hooks, including useState and useEffect, are essential tools in functional components for managing state and side effects in React applications. However, there are certain rules and considerations to keep in mind when using them.

- React hooks cannot be used in class components; they are designed specifically for function components.
- Attempting to use hooks within a class component will result in errors, as classes have their own mechanisms for state management and lifecycle methods.
- Hooks should not be used inside if conditionals, functions, or loops. They should operate independently at the top level of a functional component.

## Using useState

The useState hook is used to manage state within functional components. When using useState:

- Call the useState function with the default state value.
- useState(default) returns an array of two values: the current state and a function to update the state.
- Destructure the returned array into separate variables for clarity and convenience.

Example:

```javascript
const [state, setState] = useState(initialState);
