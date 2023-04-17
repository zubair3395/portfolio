import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../api/api";
const initialState= {
    weatherData: []
}
 const getWeatherData= createAsyncThunk("getWeatherData", async(payload)=>{
   const response= await fetchApi.weather.getWeatherData(payload)
   return response.data;
 })
const weaatherSlice= createSlice({
   name: "WeatherSlice",
   initialState,
   reducers: {},
   extraReducers: (builder)=>{
    builder.addCase(getWeatherData.fulfilled, (state, action)=>{
        state.weatherData= action.payload
    })
   }
})

export default weaatherSlice.reducer;
export {getWeatherData}