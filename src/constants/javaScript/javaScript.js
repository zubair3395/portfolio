const javaScript = [
  {
    id: "0",
    title: "JavaScript introduction",
    description:
      "JavaScript is a scripting Language.If we want to build the website with only HTML and Css its just a static site but with the help of javaScript we can perform the different functionality such thta onclick we can change the color of any button etc",
    show: "none",
  },
  {
    id: "1",
    title: "JavaScript Output",
    description:
      "We can find the out of JavaScript with the help of these methhod. Writing into an HTML element, using innerHTML. Writing into the HTML output using document.write().Writing into an alert box, using window.alert().Writing into the browser console, using console.log().",
    show: "none",
  },
  {
    id: "2",
    title: "JavaScript Comments",
    description:
      "JavaScript comments can be used to explain JavaScript code, and to make it more readable.",
    show: "none",
  },
  {
    id: "3",
    title: "JavaScript Variables",
    description:
      "Variable are used to store the data. Variable are represented by a, b c etc. We can declare a variable let x = 20. where x is varibale and let is data type and 20 is constant",
    show: "none",
  },
  {
    id: "4",
    title: "JavaScript Let",
    description:
      "Variables defined with let cannot be redeclared.Variables defined with let must be Declared before use. Variables defined with let have Block Scope. Variables defined with const cannot be Reassigned. Variables defined with const have Block Scope. For example: if we declare let x= 20, then we can assign the value to x=30 but we can not redeclare the same varibale such that let x=30 it gives us error.",
    show: "none",
  },
  {
    id: "5",
    title: "JavaScript Const",
    description:
      "Variables defined with const cannot be Redeclared.Variables defined with const cannot be Reassigned. Variables defined with const have Block Scope. For example: if we declare const x= 20, then we can not assign the value to x=30 it gives us the error",
    show: "none",
  },
  {
    id: "6",
    title: "JavaScript Objects",
    description:
      "Object are the collection of differnt data. Data can be number, string or bool etc.The value of object is represented by curly brasis such that const obj= { a:5, b:10, c:20} where const is datatype and obj is object name. Where we can access the value of a, b and c such that obj.a obj.b and obj.c",
    show: "none",
  },
  {
    id: "7",
    title: "JavaScript Math Object",
    description:
      "The JavaScript Math object allows you to perform mathematical tasks on numbers.Lots of mathematics Math is builtin object such that random(), around(), pow() etc",
    show: "none",
  },
  {
    id: "8",
    title: "JavaScript Function",
    description:
      "Function are the reuseabale code. JavaScript functions are defined with the function keyword. You can use a function declaration or a function expression. Function declaration are where we define the function and function expression are where we call the function.There is three types of function named function unnamed function and error function. named function is represented by function sum(){...}, and unnamed function is represented by const sum = function(){...}  and arrow function is represented by const sum = ()=> {...}. Arrow function is shorter syntax of function.",
    show: "none",
  },
  {
    id: "9",
    title: "Asynchronous JavaScript",
    description:
      "The async function declaration declares an async function where the await keyword is permitted within the function body.The await keyword is used  when there is delay in the statement the other statemnet are not executed until the response are not collected.This function mostly used when we call an Api. For example this function is represented by const fetchData= async()=>{ const data= await axios.get(.....) }.",
    show: "none",
  },
  {
    id: "10",
    title: "JavaScript Promises",
    description:
      "Promises always return something It return either request is fullfilled or not or in pending stag.There is three ways of promise. First is pending (In the wait of response). Second Fullfill (Fullfill the response) and third is Reject (counld not get the response). .then is used to fullfill and .catch is used to catch the error.",
    show: "none",
  },
  {
    id: "11",
    title: "JavaScript Loops",
    description:
      "Repeatation of code until the condition is ture.Loops are terminate when the given condtion become false.There are there common loops such that for loop while loop and do while loop. For loop is mostly used when number of iteration is know and it is easy to use the syntax of for loop is for(let=0; i<5; i++ ){ console.log(hello)} This statement is executed until the condition is ture. similarly while(i<5){console.log(hello) i++} and do {console.log(hello)} while(i<5) The do while is at least one time excuted until the condition is false",
    show: "none",
  },
];
export default javaScript;
