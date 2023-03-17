import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState= {
    posts: [],
    users: [],
    todos: []
}
  const getPosts= createAsyncThunk("getPosts", async()=> {
    const response= await axios.get("https://jsonplaceholder.typicode.com/posts");
       return response.data
  })
  const getUsers= createAsyncThunk("getUsers", async()=> {
    const response= await axios.get("https://jsonplaceholder.typicode.com/users");
       return response.data
  })
  const getTodos= createAsyncThunk("getTodos", async()=> {
    const response= await axios.get("https://jsonplaceholder.typicode.com/todos");
       return response.data
  })
const jsonplaceholderSlice= createSlice({
    name: "jsonPlaceHolder",
    initialState,
    reducers: { },
    extraReducers: (builder)=>{
        // Posts
        builder.addCase(getPosts.fulfilled, (state, action)=>{
            state.posts= action.payload
        })
        // Users
        builder.addCase(getUsers.fulfilled, (state, action)=>{
            
            state.users= action.payload
        })
        // Todos
        builder.addCase(getTodos.fulfilled, (state, action)=>{
            console.log("action.payload: ", action.payload);
            state.todos= action.payload
        })
    }
})
export default jsonplaceholderSlice.reducer;
export {getPosts, getUsers, getTodos} 