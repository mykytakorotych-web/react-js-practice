"use client"
import { Loader } from "../../components/ui/loader/Loader"

import { RecipeCard } from "../../components/home/recioeCard/RecipeCard"
import { useInfinityScroll } from '../../hooks/useInfinityScroll'
import "./HomePage.css"

export function HomePage() {
  const {data, error, isFetching, isLoading} = useInfinityScroll()

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
      <div
        ref={observerRef}
        style={{ height: "20px", margin: "20px 0", textAlign: "center" }}
      >
        {isFetching && <Loader />}
      </div>
    </main>
  )
}
