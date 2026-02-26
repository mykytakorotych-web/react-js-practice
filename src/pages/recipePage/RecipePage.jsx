
import { Loader } from "../../components/ui/loader/Loader"

import { InstructionsSection } from '../../components/recipe/instructionsSection/InstructionsSection'
import { RecipeHero } from '../../components/recipe/RecipeHero'
import { BackBtn } from '../../components/ui/backBtn/BackBtn'
import { useRecipe } from "../../hooks/useRecipe"
import "./RecipePage.css"

export function RecipePage() {
  const {
    data,
    error,
    isLoading,
  } = useRecipe()

  if (isLoading) return <Loader />
  if (error) return <div className="recipeContainer">Error loading recipe</div>
  if (!data) return null

  return (
    <main className="recipeContainer">
      <BackBtn />

      <div className="recipeGrid">
        <RecipeHero recipe={data} />

        <InstructionsSection recipe={data} />
      </div>
    </main>
  )
}
