import { ArrowLeft, ChefHat, Clock, Flame, Star, Users } from "lucide-react"

import { Loader } from "../../components/ui/loader/Loader"

import { useRecipe } from "../../hooks/useRecipe"
import "./RecipePage.css"

export function RecipePage() {
  const {
    data,
    checkedIngredients,
    error,
    isLoading,
    navigate,
    toggleIngredient,
  } = useRecipe()

  if (isLoading) return <Loader />
  if (error) return <div className="recipe-container">Error loading recipe</div>
  if (!data) return null

  return (
    <main className="recipe-container">
      {/* Кнопка Назад */}
      <button onClick={() => navigate(-1)} className="back-btn">
        <ArrowLeft size={20} />
        Back to recipes
      </button>

      <div className="recipe-grid">
        <aside className="recipe-hero">
          <div className="recipe-image-wrapper">
            <img
              src={data.image}
              alt={data.name}
              className="recipe-image"
              loading="eager"
            />
          </div>

          <div className="recipe-header">
            <h1>{data.name}</h1>

            <div className="stats-bar">
              <div className="stat-item" title="Prep time">
                <Clock size={16} className="stat-icon" />
                <span>{data.prepTimeMinutes + data.cookTimeMinutes} min</span>
              </div>
              <div className="stat-item" title="Calories">
                <Flame size={16} className="stat-icon" />
                <span>{data.caloriesPerServing} kcal</span>
              </div>
              <div className="stat-item" title="Difficulty">
                <ChefHat size={16} className="stat-icon" />
                <span>{data.difficulty}</span>
              </div>
              <div className="stat-item" title="Rating">
                <Star size={16} className="stat-icon" />
                <span>
                  {data.rating} ({data.reviewCount})
                </span>
              </div>
              <div className="stat-item" title="Servings">
                <Users size={16} className="stat-icon" />
                <span>{data.servings} ppl</span>
              </div>
            </div>
          </div>
        </aside>

        <article className="recipe-content">
          <section>
            <h2 className="section-title">Ingredients</h2>
            <ul className="ingredients-list">
              {data.ingredients.map((ing, idx) => (
                <li
                  key={idx}
                  className={`ingredient-item ${checkedIngredients[idx] ? "checked" : ""}`}
                  onClick={() => toggleIngredient(idx)}
                >
                  <div className="check-circle" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="section-title">Instructions</h2>
            <div className="instructions-list">
              {data.instructions.map((step, idx) => (
                <div key={idx} className="step-item">
                  <div className="step-number">{idx + 1}</div>
                  <p className="step-text">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
