import axios from "axios";
import api from "../config/api";

export const fetchApi = {
  //authentication
  authentication: {
    usersData: async () => await axios.get(api.authentication.getUsers),
    singleUser: async (id) =>
      await axios.get(`${api.authentication.getUsers}/${id}`),
    setUserData: async (payload) =>
      await axios.post(api.authentication.getUsers, payload),
    forgetPassword: async (payload) =>
      await axios.patch(`${api.authentication.getUsers}/${payload.id}`, {
        password: payload.password,
      }),
  },

  //shopping
  shopping: {
    shoppingData: async () => await axios.get(api.shopping.getShoppingData),
  },
  // Json placeHolder Apis
  json: {
    postsGetData: async () => await axios.get(api.json.getPostsData),
    usersGetData: async () => await axios.get(api.json.getUsersData),
    todosGetData: async () => await axios.get(api.json.getTodosData),
  },

  weather: {
    getWeatherData: async (payload) =>
      await axios.get(api.weather.getWeatherData(payload)),
  },
};
