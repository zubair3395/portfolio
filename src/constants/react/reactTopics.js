const reactTopic = [
  {
    id: "0",
    title: "What is React?",
    description:
      "React is JavaScript library for building user interfces.It let you to compose the complex UI in small parts called the components.React js use the virtual dom instead of Dom. Virtual DOM can not update the enrire screen it updte the only component where the state is updated.",
  },

  {
    id: "1",
    title: "React Render",
    description:
      "Render method return the description that we see on the screen. In our project There is src folder inside src index.js file where render our jsx such that root.render() where root is class which is executed in public folder which contain index.html where entire website is render. ",
  },
  {
    id: "2",
    title: "React JSX",
    description:
      "JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. With JSX you can write expressions inside curly braces { }. For example in any component inside the return() we can write the HTML tags called the jsx. JSX allow us to write the JavaScript in HTML tags.To write the JavaScript we put the curly brasis {} inside these brackets we can write our javaScript logic",
  },
  {
    id: "3",
    title: "React Components",
    description:
      "Components are independent and reusable bits of code.The complex UI divided into the small part is called the Components.We divide the screen in header and footer and children etc.If we want to build the large application first we build the small components that is mostly used in application such same button, text field, number field etc",
  },
  {
    id: "4",
    title: "React Props",
    description:
      "props stands for properties. Props are arguments passed into React components. Props are passed to components via HTML attributes. Button as component then we can pass its event , text as props similalrly If we use the text field we pass its ebent and value as props and soo on. For example we build input component then we pass its vale and onChange event in this way. <Input value={...} onChnage={...}. If we want to build our own component then always write the first letter of this component is captil",
  },
  {
    id: "5",
    title: "React Conditional",
    description: `In React, you can conditionally render components. We can use the ternery operator to decide which component to render. For example const isResult= null  return ( {isResult? <h1> if have a reesult then Render this component </h1> : <p>else render this component</p> })`,
  },
  {
    id: "6",
    title: "React Lists",
    description:
      "React Lists are Array. In React, you will render lists with some type of method. For exapmle arr=[zubair, zohaib, ali, aswad] if you want to render this arrray in jsx then you must use map() method usch that {arr.map(item,index) => <h1 key={index}>item</h1> } ",
  },
  {
    id: "7",
    title: "React Forms",
    description:
      "Just like in HTML, React uses forms to allow users to interact with the web page.The conatin the innner tags such that input tags and button etc the input tags can be a text field number field and email field etc. We can write our information in input tags and submit.",
  },
  {
    id: "8",
    title: "React Routers Dom",
    description:
      "React router dom is used to specify the routes of the components. For example if build the Navbar component now we want to specify the path of this component we write <Route path=/navbar element={<Navbar/>}/> Theree tags are used to specify the React-Router-Dom BrowserRouter If we use react router dom wrap all the application between this tag. Routes are the child of the BrowserRouter, wrap those components which we want to spcify the routes and last is Route which specify the routes. ",
  },
];

export default reactTopic;
