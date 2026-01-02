import React from 'react' 

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["Chicken", "Lime", "Wraps"])

    const ingredientList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

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

            <ul>
                {ingredientList}
            </ul>
            
        </main>
    )
}