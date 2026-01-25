    

export default function IngredientsList (props) {


        const ingredientList = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    )) 

    return(
        props.ingredients.length < 4 ? <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul></section>: 
                
           <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button type='submit' onClick={props.clickFunc}>Get a recipe</button>
                </div>
            </section>
    )
    
}