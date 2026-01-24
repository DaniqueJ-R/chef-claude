export default function IngredientsList (props) {

    return(
        <li key={props.ingredient}>{props.ingredient}</li>

    )
    
}
        // {ingredients.length < 4 ? <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>: 
                
        //    <section>
        //         <h2>Ingredients on hand:</h2>
        //         <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
        //         <div className="get-recipe-container">
        //             <div>
        //                 <h3>Ready for a recipe?</h3>
        //                 <p>Generate a recipe from your list of ingredients.</p>
        //             </div>
        //             <button type='submit' onClick={recipeToggle}>Get a recipe</button>
        //         </div>
        //     </section>}