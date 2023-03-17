const routes = {
  default: {
    path: "/home",
  },

  authentication: {
    login: "/",
    signup: "/signup",
    forgetPassword: "/forgetPassword"
  },

  projects: {
    appDetail: "/projects/appDetail",
    calculator: "/projects/appDetail/calculator",
    musicApp: "/projects/appDetail/music",
    diceGame: "/projects/appDetail/diceApp",
    kompond: "/projects/appDetail/kompond",
    footBall: "/projects/appDetail/football",
    addCart: "/projects/appDetail/shoppingWebsite/addCartItem",
    shopping: "/projects/appDetail/shoppingWebsite",
    username: "/username",
    thunk: "/projects/appDetail/redux-thunk",
    formValidation: "/projects/appDetail/formValidation",
    weather: "/projects/appDetail/weather",
  },

  subjects: {
    javaScript: "/subjects/javaScript",
    html: "/subjects/HtmlTutorial",
    arrayJavaScript: "/subjects/arrayJavaScript",
    reactjs: "/subjects/ReactJs",
  },
};

export default routes;
