import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './api/authApi.js'
import { recipesApi } from './api/recipesApi.js'
import { usersApi } from './api/usersApi.js'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware).concat(recipesApi.middleware).concat(authApi.middleware)
})