import React from 'react' 
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

export default function Main() {

    const [ingredients, setIngredients] = React.useState([]) 


    const [recipeShown, setRecipeShown] = React.useState(false)

    function recipeToggle () {
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form action={addIngredients} className="add-ingredient-form">
                <input type="text" 
                name="ingredient"
                placeholder="e.g. salmon" 
                aria-label="Add Ingredient" />
                <button type="submit"> Add ingredient</button>
            </form>

            <IngredientsList ingredients={ingredients} clickFunc={recipeToggle}/>
            

            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}