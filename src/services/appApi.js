import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


//// Define a service User a Base URL

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://chat-app-backend-ol2i.onrender.com"
    }),

    endpoints: (builder) => ({

        /// Creating the USer
        signupUser: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user
            })
        }),

        //// Login 
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user
            })
        }),

        //// LogOut
        logoutUser: builder.mutation({
            query: (payload) => ({
                url: "/logout",
                method: "DELETE",
                body: payload
            })
        })


    })
})

export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation } = appApi;

export default appApi;