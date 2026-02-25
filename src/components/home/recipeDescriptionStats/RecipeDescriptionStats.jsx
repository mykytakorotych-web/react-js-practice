import { Heart, Timer } from "lucide-react"
import "./RecipeDescriptionStats.css"

export function RecipeDescriptionStats({ recipe }) {
  return (
    <div className="recipeDescriptionStats">
      <h5 className="difficulty">
        {recipe.difficulty}
      </h5>
      <div className="cookTimeMinutes">
        <span>{recipe.cookTimeMinutes}</span>  
        <Timer size={16}/>
      </div>
      <div className="rating">
        <span>{recipe.rating}</span>
        <Heart size={16} fill='red'/>
      </div>
    </div>
  )
}
