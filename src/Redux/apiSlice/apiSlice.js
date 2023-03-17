import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPostsApi: builder.query({
      query: () => `posts`,
    }),
    getUsersApi: builder.query({
      query: () => `users`,
    }),
    getTodosApi: builder.query({
      query: () => `todos`,
    }),

  }),
});

export const { useGetPostsApiQuery, useGetUsersApiQuery, useGetTodosApiQuery } = apiSlice;
