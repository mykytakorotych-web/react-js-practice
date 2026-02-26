import { Check } from 'lucide-react'
import { useState } from 'react'

import "./IngredientsSection.css"

export function IngredientsSection({recipe}) {
  const [checkedIngredients, setCheckedIngredients] = useState({})

  const toggleIngredient = idx => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }))
  }

  return (
    <section>
      <h2 className="sectionTitle">Ingredients</h2>
      <ul className="ingredientsList">
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx} className="ingredientWrapper">
            <label className="ingredientLabel">
              <input
                type="checkbox"
                className="visuallyHiddenInput"
                checked={!!checkedIngredients[idx]}
                onChange={() => toggleIngredient(idx)}
              />

              <span className="customCheckbox">
                <Check size={12} strokeWidth={4} className="checkIcon" />
              </span>

              <span className="ingredientText">{ing}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
