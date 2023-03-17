import calculator from "../assests/images/calculator.jpeg";
import background from "../assests/images/background.jpeg";
import dice from "../assests/images/dice.jpeg";
import ball from "../assests/images/ball.jpg";
import profile from "../assests/images/profile.jpeg";
import kompond from "../assests/images/kompond.png";
import form from "../assests/images/form.jpeg";
import thunk from "../assests/images/thunk.jpeg";
import weather from "../assests/images/weather.jpeg";
import routes from "../config/routes";

const appDetail = [
  {
    id: "0",
    src: profile,
    title: "Shopping website",
    description: "Perform the simple functionality of Shopping website",
    path: routes.projects.shopping,
  },
  {
    id: "1",
    src: kompond,
    title: "Publicator Them",
    description: "Publicator project them",
    path: routes.projects.kompond,
  },
  {
    id: "2",
    src: background,
    title: "Music App",
    description: "Simple Music app contin 10 songs",
    path: routes.projects.musicApp,
  },
  {
    id: "3",
    src: dice,
    title: "Dice Game",
    description: "This app perfrom the functionality of Lodu game",
    path: routes.projects.diceGame,
  },
  {
    id: "4",
    src: ball,
    title: "Football Game",
    description: "Clicked on the ball increase the score",
    path: routes.projects.footBall,
  },
  {
    id: "5",
    src: calculator,
    title: "Calculator",
    description:
      "This calculator Perform the some basics functionality of mathematics",
    path: routes.projects.calculator,
  },
  {
    id: "6",
    src: form,
    title: "Form Validation",
    description:
      "Here is all the concept of Props, React Router Components and Validtion are used",
    path: routes.projects.formValidation,
  },
  {
    id: "7",
    src: thunk,
    title: "Fetch Mutiple API",
    description: "In this project fetch the mutiple api through Redux tool kit",
    path: routes.projects.thunk,
  },
  {
    id: "8",
    src: weather,
    title: "Weather App",
    description: "This app give the information about weather",
    path: routes.projects.weather,
  },
];

export default appDetail;
