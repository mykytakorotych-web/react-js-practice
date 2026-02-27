import { ChefHat, Clock, Star } from 'lucide-react'
import { memo } from 'react'
import { Link } from 'react-router'
import './RecipeCard.css'

export const RecipeCard = memo(function RecipeCard({ recipe, priority = false }) {
  const totalTime = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);

  return (
    <article className="recipe-card">
      <Link to={`/recipe/${recipe.id}`} className="recipe-card-link" aria-label="Go to Recipe page">
        
        <div className="card-image-wrapper">
          {recipe.cuisine && (
            <div className="cuisine-badge">{recipe.cuisine}</div>
          )}
          
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="card-image"
            loading={priority ? "eager" : "lazy"} 
            fetchPriority={priority ? "high" : "auto"} 
            width="233"    
            height="175"
          />
        </div>

        <div className="card-content">
          <h3 className="card-title" title={recipe.name}>
            {recipe.name}
          </h3>

          <div className="card-stats">
            <div className="card-stat-item" title="Total time">
              <Clock size={14} className="card-stat-icon" />
              <span>{totalTime > 0 ? `${totalTime} min` : 'N/A'}</span>
            </div>

            <div className="card-stat-item" title="Difficulty">
              <ChefHat size={14} className="card-stat-icon" />
              <span>{recipe.difficulty}</span>
            </div>

            <div className="card-stat-item" title="Rating">
              <Star size={14} className="card-stat-icon" fill="currentColor" />
              <span>{recipe.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
});