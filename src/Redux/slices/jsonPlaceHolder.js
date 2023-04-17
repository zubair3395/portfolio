import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../api/api";
const initialState= {
    posts: [],
    users: [],
    todos: [],
    isLoading: false,
}
  const getPosts= createAsyncThunk("getPosts", async()=> {
    const response= await fetchApi.json.postsGetData();
       return response.data
  })
  const getUsers= createAsyncThunk("getUsers", async()=> {
    const response= await fetchApi.json.usersGetData();
       return response.data
  })
  const getTodos= createAsyncThunk("getTodos", async()=> {
    const response= await fetchApi.json.todosGetData();
       return response.data
  })
const jsonplaceholderSlice= createSlice({
    name: "jsonPlaceHolder",
    initialState,
    extraReducers: (builder)=>{
        // Posts Event
        builder.addCase(getPosts.pending, (state)=>{
            state.isLoading= false
        })
        builder.addCase(getPosts.fulfilled, (state, action)=>{
            state.isLoading= true
            state.posts= action.payload
        })
        builder.addCase(getPosts.rejected, (state)=>{
            state.isLoading= false
        })
        // Users Event 
        builder.addCase(getUsers.pending, (state)=>{
            state.isLoading= false
        })
        builder.addCase(getUsers.fulfilled, (state, action)=>{ 
            state.isLoading= true
            state.users= action.payload
        })
        builder.addCase(getUsers.rejected, (state)=>{
            state.isLoading= false
        })
        // Todos Event
        builder.addCase(getTodos.pending, (state)=>{
            state.isLoading= false
        })
        builder.addCase(getTodos.fulfilled, (state, action)=>{
           state.isLoading= true
            state.todos= action.payload
        })
        builder.addCase(getTodos.rejected, (state)=>{
            state.isLoading= false
        })
    }
})
export default jsonplaceholderSlice.reducer;
export {getPosts, getUsers, getTodos} 