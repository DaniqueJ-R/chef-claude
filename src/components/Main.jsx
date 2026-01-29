import React from 'react' 
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

// fetching api call
export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch('/api/get-recipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredients: ingredientsArr })
        })
        
        const data = await response.json()
        return data.recipe
    } catch (err) {
        console.error(err)
        throw err
    }
}

export default function Main() {

    const [ingredients, setIngredients] = React.useState([]) 
    const [aiRecipe, setAiRecipe] = React.useState("")
    const [reset, setReset] = React.useState([])
    const [loading, setloading] = React.useState(false)

    async function getRecipe() {
        setloading(true)
        try {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
            setAiRecipe(recipeMarkdown) 
        } catch (err) { console.error(err)}
        finally {setloading(false)}

    }

    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient")

        if (!newIngredient){
            alert('Please add an ingredient to the list')
        } else (
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        )
    }

    function resetIngredients () {
        setIngredients(reset)
    }

    return(
        <main>
            <form action={addIngredients} className="add-ingredient-form">
                <input type="text" 
                name="ingredient"
                placeholder="e.g. salmon" 
                aria-label="Add Ingredient" />
                <button type="submit"> Add ingredient</button>
                <button className='reset' type="reset" onClick={resetIngredients} > Reset</button>
            </form>

            <IngredientsList ingredients={ingredients} clickFunc={getRecipe}/>

            {loading ? <p className='loading'>Getting Recipe...</p> : aiRecipe && <ClaudeRecipe aiRecipe={aiRecipe} />}
        </main>
    )
}