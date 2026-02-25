import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './api/postsApi.js'
import { recipesApi } from './api/recipesApi.js'
import { usersApi } from './api/usersApi.js'


export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware).concat(postsApi.middleware).concat(recipesApi.middleware)
})