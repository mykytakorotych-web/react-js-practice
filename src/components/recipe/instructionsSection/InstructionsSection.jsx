import { IngredientsSection } from '../ingredientsSection/IngredientsSection'
import "./InstructionsSection.css"

export function InstructionsSection({recipe}) {
  return (
    <article className="recipeContent">
      <IngredientsSection recipe={recipe} />
      <section aria-labelledby="instructionsHeading">
        <h2 id="instructionsHeading" className="sectionTitle">
          Instructions
        </h2>
        <ol className="instructionsList">
          {recipe.instructions.map((step, idx) => (
            <li key={idx} className="stepItem">
              <div className="stepNumber" aria-hidden="true">
                {idx + 1}
              </div>

              <p className="stepText">{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}
