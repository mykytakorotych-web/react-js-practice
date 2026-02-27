import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { Mutex } from "async-mutex"
import { logOut, setCredentials } from "../slices/authSlice"

const mutex = new Mutex()
const privateEndpoints = ["getMe"]

const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com/",
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState().auth.token

    if (privateEndpoints.includes(endpoint)) {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
    }
    return headers
  },
})

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401 && !extraOptions?.skipReauth) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery("auth/refresh", api, extraOptions)

        if (refreshResult.data) {
          api.dispatch(
            setCredentials({
              token: refreshResult.data.accessToken,
            }),
          )

          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logOut())
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()

      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}
