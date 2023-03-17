const reactHooks = [
  {
    id: "0",
    title: "What is React Hooks",
    description:
      "Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed",
    show: "none",
  },
  {
    id: "1",
    title: "useState",
    description:
      "useState is used to update the current value. Hooks provide the additional features without writting the classes",
    show: "none",
  },
  {
    id: "2",
    title: "useEffect",
    description:
      "useEffect is load after the component render.The useEffect Hook allows you to perform side effects in your components. useEffect accepts two arguments.The first argument is function and the second argument is dependency whic is optional.",
    show: "none",
  },
  {
    id: "3",
    title: "React Context",
    description:
      "React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.",
    show: "none",
  },
  {
    id: "4",
    title: "useRef ",
    description:
      "The useRef is used to refer the somethings. It can be used to store a mutable value that does not cause a re-render when updated.",
    show: "none",
  },
  {
    id: "5",
    title: "useCallback",
    description:
      "The React useCallback Hook returns a memoized callback function.This allows us to isolate resource intensive functions so that they will not automatically run on every render.The useCallback Hook only runs when one of its dependencies update.",
    show: "none",
  },
  {
    id: "6",
    title: "useMemo",
    description:
      "The React useMemo Hook returns a memoized value. The useMemo Hook only runs when one of its dependencies update.",
    show: "none",
  },
  {
    id: "7",
    title: "Custom Hooks",
    description:
      "When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook",
    show: "none",
  },
];
export default reactHooks;
