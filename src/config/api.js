const Host = "http://localhost:3004";

const api = {
  authentication: {
    getUsers: `${Host}/users`,
  },
  shopping: {
    getShoppingData: `${Host}/Collection`,
  },
  json: {
    getPostsData: "https://jsonplaceholder.typicode.com/posts",
    getUsersData: "https://jsonplaceholder.typicode.com/users",
    getTodosData: "https://jsonplaceholder.typicode.com/todos"

  }, 
  weather: {
    getWeatherData: (payload)=>  `https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&APPID=5d61c78a978e7adce3beeb505dcd4195`
  }
};

export default api;
