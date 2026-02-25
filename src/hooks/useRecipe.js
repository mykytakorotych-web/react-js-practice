import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { useGetSingleRecipeQuery } from "../store/api/recipesApi"

export const useRecipe = () => {
  const { recipeId } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, error } = useGetSingleRecipeQuery(recipeId)
  const [checkedIngredients, setCheckedIngredients] = useState({})

  const toggleIngredient = idx => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }))
  }

  return {
    isLoading,
    error,
    data,
    checkedIngredients,
    navigate,
    setCheckedIngredients,
    toggleIngredient,
  }
}
