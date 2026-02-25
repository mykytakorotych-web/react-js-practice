import { Link } from 'react-router'
import { Modal } from "../../ui/modal/Modal"
import { RecipeDescriptionStats } from '../recipeDescriptionStats/RecipeDescriptionStats'

export function RecipeModal({selectedRecipe, setSelectedRecipe}) {

  return (
    <Modal isOpen={!!selectedRecipe} onClose={() => setSelectedRecipe(null)}>
      {selectedRecipe && (
        <div className="recipeModalWrapper">
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
            style={{ width: "100%" }}
          />
          <div className="recipeDescription">
            <RecipeDescriptionStats recipe={selectedRecipe} />
            <div className="recipeTitle">
              <h5>{selectedRecipe.name}</h5>
              <span>/{selectedRecipe.cuisine}</span>
            </div>
            <div className="recipeIngtrdients">
              <h5>Ingredients:</h5>
              <ol>
                {selectedRecipe.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ol>
            </div>
            <Link to={`/recipe/${selectedRecipe.id}`} className="startCookingBtn">Start Cooking</Link>
          </div>
        </div>
      )}
    </Modal>
  )
}
