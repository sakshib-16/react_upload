import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const postApi= createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'postApi',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://jsonplaceholder.typicode.com/',
      
       }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPosts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => ({
       url: 'users',
        method:'GET'      
    })
  }),
  

  deletePost:builder.mutation({
    query: (id) => ({

        url: `users?${id}`,
        method:'DELETE'          
    })

 
})
})


})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery } = postApi