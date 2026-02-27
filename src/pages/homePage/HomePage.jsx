"use client"
import { RecipeCard } from '../../components/home/recipeCard/RecipeCard'
import { Loader } from "../../components/ui/loader/Loader"

import { useInfinityScroll } from '../../hooks/useInfinityScroll'
import "./HomePage.css"

export function HomePage() {
  const {data, error, isFetching, isLoading, observerRef} = useInfinityScroll()

  if (isLoading) return <Loader />
  if (error) return <div>Error: {error.message}</div>

  return (
    <main>
      <ul className="recipeList">
        {data.recipes.map((recipe, idx) => (
          <li key={recipe.name}>
            <RecipeCard recipe={recipe} priority={idx < 3}/>
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
