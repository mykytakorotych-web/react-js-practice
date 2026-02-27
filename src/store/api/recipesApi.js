import { baseApi } from './baseApi'

export const recipesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getRecipes: builder.query({
      query: ({ limit = 10, skip = 0 } = {}) => `recipes/?limit=${limit}&skip=${skip}`,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },

      merge: (currentCache, newItems) => {
        currentCache.recipes.push(...newItems.recipes)

        if (newItems.recipes.length === 0) {
          currentCache.total = currentCache.recipes.length
        }
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.skip !== previousArg?.skip
      },

      providesTags: ['Recipes']
    }),

    getSingleRecipe: builder.query({
      query: (id) => `recipes/${id}`,
      providesTags: ['Recipes']
    })

  }),
  overrideExisting: false,
})


export const { useGetRecipesQuery, useGetSingleRecipeQuery } = recipesApi