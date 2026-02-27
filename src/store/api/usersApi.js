import { baseApi } from './baseApi'

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getUsers: builder.query({
      query: (searchQuery) => {
        return {
          url: `users/search`,
          params: { q: searchQuery, limit: searchQuery.length < 3 ? '10' : '0' },
        }
      },
      providesTags: ['Users']
    })
  }),
  overrideExisting: false,
})


export const { useGetUsersQuery } = usersApi