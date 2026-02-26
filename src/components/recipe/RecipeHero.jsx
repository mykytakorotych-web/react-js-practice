import { ChefHat, Clock, Flame, Star, Users } from "lucide-react"
import "./RecipeHero.css"

export function RecipeHero({ recipe }) {
  return (
    <aside className="recipeHero">
      <div className="recipeImageWrapper">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipeImage"
          loading="eager"
          width={285}
          height={215}
        />
      </div>

      <div className="recipeHeader">
        <h1>{recipe.name}</h1>

        <div className="statsBar">
          <div className="statItem" title="Prep time">
            <Clock size={16} className="statIcon" />
            <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
          </div>
          <div className="statItem" title="Calories">
            <Flame size={16} className="statIcon" />
            <span>{recipe.caloriesPerServing} kcal</span>
          </div>
          <div className="statItem" title="Difficulty">
            <ChefHat size={16} className="statIcon" />
            <span>{recipe.difficulty}</span>
          </div>
          <div className="statItem" title="Rating">
            <Star size={16} className="statIcon" />
            <span>
              {recipe.rating} ({recipe.reviewCount})
            </span>
          </div>
          <div className="statItem" title="Servings">
            <Users size={16} className="statIcon" />
            <span>{recipe.servings} ppl</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
