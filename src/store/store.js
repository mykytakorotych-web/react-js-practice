import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './api/baseApi.js'
import { usersApi } from './api/usersApi.js'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware)
})