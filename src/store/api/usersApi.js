import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({

    getUsers: builder.query({
      query: (searchQuery) => {
        return {
          url: `users/search`,
          params: { q: searchQuery, limit: searchQuery.length < 3 ? '10' : '0' },
        }
      },
    }),

  }),
})


export const { useGetUsersQuery } = usersApi