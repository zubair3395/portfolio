import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import authenticationSlice from "../slices/authenticationSlice";
import jsonPlaceHolder from "../slices/jsonPlaceHolder";
import shoppingSlice from "../slices/shoppingSlice";
import weatherSlice from "../slices/weatherSlice";

export const store = configureStore({
  reducer: {
    ShoppingStore: shoppingSlice,

    jsonPlaceHolder: jsonPlaceHolder,

    authentication: authenticationSlice,
    
    weatherSlice: weatherSlice,

  },
});
