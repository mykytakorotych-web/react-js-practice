import Cookies from "js-cookie"
import { setCredentials, setUser } from "../slices/authSlice"
import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          const userObj = {
            id: data.id,
            username: data.username,
            image: data.image
          }

          Cookies.set("token", data.accessToken, { expires: 1, secure: true })
          Cookies.set("refreshToken", data.refreshToken, {
            expires: 7,
            secure: true,
          })
          localStorage.setItem("user", JSON.stringify(userObj))

          dispatch(
            setCredentials({
              user: userObj,
              token: data.accessToken,
            }),
          )
        } catch (err) {
          console.error("Error on login", err)
        }
      },
      invalidatesTags: ['Auth'],
      extraOptions: { skipReauth: true },
    }),
    getMe: builder.query({
      query: () => "auth/me",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data))
        } catch (err) {
          console.error("Error while fetching profile", err)
        }
      },
      providesTags: ['Auth'],
    }),
  }),
  overrideExisting: false,
})
export const { useLoginMutation, useGetMeQuery } = authApi
