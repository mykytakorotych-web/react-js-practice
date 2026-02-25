import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({

    getRecipes: builder.query({
      query: ({ limit = 10, skip = 0 } = {}) => `recipes/?limit=${limit}&skip=${skip}`,
    }),

    getSingleRecipe: builder.query({
      query: (id) => `recipes/${id}`,
    })

  }),
})


export const { useGetRecipesQuery, useGetSingleRecipeQuery } = recipesApi