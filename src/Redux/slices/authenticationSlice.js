import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../api/api";

const initialState = {
  userData: [],
};
const getUserData = createAsyncThunk("getUserData", async () => {
  const response = await fetchApi.authentication.usersData();
  return response.data;
});
const setUserData = createAsyncThunk("setUserData", async (payload) => {
  await fetchApi.authentication.setUserData(payload);
});
const forgetPassword = createAsyncThunk("forgetPassword", async (payload) => {
  await fetchApi.authentication.forgetPassword(payload);
});

const authenticationSlice = createSlice({
  name: "authenticationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export default authenticationSlice.reducer;
export { getUserData, forgetPassword, setUserData };
