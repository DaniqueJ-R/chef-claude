import React from 'react' 

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

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

           {ingredients.length < 4 ? <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>: 
                
           <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
            
        </main>
    )
}