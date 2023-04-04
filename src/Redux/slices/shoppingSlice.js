import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../api/api";

const getCollection = createAsyncThunk("getCollection", async () => {
  const response = await fetchApi.shopping.shoppingData();
  return response.data;
});

export const shoppingSlice = createSlice({
  name: "ShoppingStore",
  initialState: {
    value: 0,
    collection: [],
    data: [],
    totalPrice: 0,
    subPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log({ action });
      const res = state.data.find((post) => post.id === action.payload.id);
      if (!res) {
        state.data = [...state.data, action.payload];
        state.totalPrice = state.totalPrice + action.payload.price;
      }
    },
    removeCart: (state, action) => {
      state.data = state.data.filter((items) => items.id !== action.payload.id);
      state.totalPrice =
        state.totalPrice - action.payload.price * action.payload.quantity;
    },
    incrementQuantity: (state, action) => {
      state.data[action.payload].quantity += 1;
      state.totalPrice = state.totalPrice + state.data[action.payload].price;
    },
    decrementQuantity: (state, action) => {
      if (state.data[action.payload].quantity > 0) {
        state.data[action.payload].quantity -= 1;
        state.totalPrice = state.totalPrice - state.data[action.payload].price;
      }
    },
    checkout: (state) => {
      state.data = [];
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCollection.fulfilled, (state, action) => {
      state.collection = action.payload;
    });
  },
});

export const {
  addToCart,
  removeCart,
  incrementQuantity,
  decrementQuantity,
  checkout,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;

export { getCollection };
