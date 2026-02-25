import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const getUserFromStorage = () => {
  try {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  } catch (e) {
    return null
  }
}

const initialState = {
  user: getUserFromStorage(),
  token: Cookies.get("token") || null,
  isAuthenticated: !!Cookies.get("token"),
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
      state.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(user))
    },
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true

      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logOut: state => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      Cookies.remove("token")
      Cookies.remove("refreshToken")
      localStorage.removeItem("user")
    },
  },
})

export const { setCredentials, logOut, setUser } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = state => state.auth.user
export const selectIsAuthenticated = state => state.auth.isAuthenticated