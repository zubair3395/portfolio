import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState= {
    weatherData: []
}
 const getWeatherData= createAsyncThunk("getWeatherData", async(payload)=>{
   const response= await axios.get(
     `https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&APPID=5d61c78a978e7adce3beeb505dcd4195`
   )
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