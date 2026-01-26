import React from 'react' 
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

export default function Main() {

    const [ingredients, setIngredients] = React.useState(['salmon', 'rice', 'lemon', 'cheese']) 
    const [aiRecipe, setAiRecipe] = React.useState("")
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    async function getRecipe() {
        setLoading(true)
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ingredients })
            })
            console.log('Response status:', response.status)
            const text = await response.text()
            console.log('Response text:', text)
            
            if (!response.ok) {
                throw new Error(`API error: ${response.status} - ${text}`)
            }
            
            const data = JSON.parse(text)
            setAiRecipe(data.recipe)
        } catch (error) {
            console.error('Error:', error)
            setAiRecipe(`Error generating recipe: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    function recipeToggle () {
        getRecipe()
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
            

            {recipeShown && <ClaudeRecipe ingredients={loading ? "Loading recipe..." : aiRecipe} />}
        </main>
    )
}