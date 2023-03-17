const Host = "http://localhost:3004";

const api = {
  authentication: {
    getUsers: `${Host}/users`,
  },
  shopping: {
    getShoppingData: `${Host}/Collection`,
  },
};

export default api;
