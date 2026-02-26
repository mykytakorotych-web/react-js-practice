import { useParams } from "react-router"
import { useGetSingleRecipeQuery } from "../store/api/recipesApi"

export const useRecipe = () => {
  const { recipeId } = useParams()

  const { data, isLoading, error } = useGetSingleRecipeQuery(recipeId)

  return {
    isLoading,
    error,
    data,
  }
}
