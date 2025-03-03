import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi ({
    reducerPath: 'jsonPlaceholderApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    // keepUnusedDataFor: 20,
    refetchOnFocus:true,
    endpoints: (builder) => ({
        getPosts: builder.query({query: () => "posts", keepUnusedDataFor: 20 }),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: "posts",
                method: "POST",
                body: newPost,
            })
        })
    })
});

export const { useGetPostsQuery, useCreatePostMutation } = jsonPlaceholderApi;