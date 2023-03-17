import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const localApiSlice=  createApi({
    reducerPath: "localApiSlice",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3004/"}),
    tagTypes: ['Users'],
    endpoints: (builder)=> ({
        getUserData: builder.query({
            query: ()=>  "users",

            providesTags: ['Users']
        }),

        createUserData: builder.mutation({
            query: (user)=> ({
                url: "users",
                method: "Post",
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        updatePassword: builder.mutation({
            query: (id, password)=> ({
                headers: {"content-type": "application/json"},
                url: `users/${id}`,
                method: "Patch",
                body:  {password: password}
            }),
            invalidatesTags: ['Users']
        })
    })
})
export const { useGetUserDataQuery, useCreateUserDataMutation, useUpdatePasswordMutation } = localApiSlice;

