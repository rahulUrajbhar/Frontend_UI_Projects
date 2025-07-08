const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, especially for single-page applications, by creating reusable UI components.",
  },
  {
    id: 2,
    question: "What are components in React?",
    answer:
      "Components are the building blocks of a React application. They are independent, reusable pieces of code that describe how a user interface (UI) should appear.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript, which React can then render to the DOM.",
  },
  {
    id: 4,
    question: "What is the difference between state and props in React?",
    answer:
      "Props are used to pass data from parent components to child components. State, on the other hand, is used to manage data that changes over time within a component.",
  },
  {
    id: 5,
    question: "What are React hooks?",
    answer:
      "React hooks are functions that allow you to use state and other React features in functional components. Examples include `useState`, `useEffect`, and `useContext`.",
  },
  {
    id: 6,
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight representation of the real DOM. React uses it to improve performance by making efficient updates to the real DOM.",
  },
  {
    id: 7,
    question: "What is `useState` hook?",
    answer:
      "`useState` is a React hook that lets you add state to functional components. It returns a state variable and a function to update it.",
  },
  {
    id: 8,
    question: "What is `useEffect` hook?",
    answer:
      "`useEffect` is a React hook that runs side effects in functional components. It is used for tasks like fetching data, updating the DOM, or subscribing to external data sources.",
  },
  {
    id: 9,
    question:
      "What is the difference between class components and functional components?",
    answer:
      "Class components use ES6 classes and have lifecycle methods, while functional components are simpler, using functions and hooks for managing state and lifecycle events.",
  },
  {
    id: 10,
    question: "How do you handle events in React?",
    answer:
      "Events in React are handled by attaching event handlers (such as `onClick`, `onChange`) to JSX elements. Event handlers are passed as functions, similar to how JavaScript handles events.",
  },
];

export default faqs;
