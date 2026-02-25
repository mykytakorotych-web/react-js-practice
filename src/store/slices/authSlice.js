import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
  user: null,
  token: Cookies.get('token'),
  isAuthenticated: !!Cookies.get('token')
}

const authSlice = createSlice({
  name: 'auth', initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
      state.isAuthenticated = true
    },
    logOut: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      Cookies.remove('token')
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectIsAuthenticated = (state) => state.action.isAuthenticated
