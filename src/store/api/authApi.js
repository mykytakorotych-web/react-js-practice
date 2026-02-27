import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import { setCredentials, setUser } from '../slices/authSlice'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled


          Cookies.set('token', data.accessToken, { expires: 1, secure: true })
          Cookies.set('refreshToken', data.refreshToken, { expires: 7, secure: true })
          localStorage.setItem('user', JSON.stringify(userObj))

          dispatch(setCredentials({
            user: {
              id: data.id,
              username: data.username,
              image: data.image
            },
            token: data.accessToken
          }))
        } catch (err) {
          console.error("Error on login", err)
        }
      }
    }),
    getMe: builder.query({
      query: () => 'auth/me',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data))

        } catch (err) {
          console.error("Error while fetching profile", err)
        }
      },
    }),
  })
})
export const { useLoginMutation, useGetMeQuery } = authApi