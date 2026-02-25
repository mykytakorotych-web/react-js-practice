"use client"
import { Loader } from "../../components/ui/loader/Loader"
import { useGetRecipesQuery } from "../../store/api/recipesApi"


import { RecipeCard } from '../../components/home/recioeCard/RecipeCard'
import "./HomePage.css"

export function HomePage() {
  const { data, error, isLoading, isFetching } = useGetRecipesQuery()

  if (isLoading) return <Loader />
  if (error) return <div>Error: {error.message}</div>

  return (
    <main>
      <ul className="recipeList">
        {data.recipes.map(recipe => (
          <li key={recipe.id}> 
             <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </main>
  )
}
