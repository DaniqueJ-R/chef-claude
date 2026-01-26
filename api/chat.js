const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { ingredients } = req.body
        
        if (!ingredients || !Array.isArray(ingredients)) {
            return res.status(400).json({ error: 'Invalid ingredients' })
        }

        // Hardcoded response for now - API integration coming soon
        const mockRecipe = `# Delicious Ingredient Stir-Fry

## Ingredients
- ${ingredients.join('\n- ')}
- Olive oil
- Salt & pepper to taste
- Garlic (1 clove, minced)
- Your choice of sauce (soy, teriyaki, or honey garlic)

## Instructions

1. **Prep**: Chop your ingredients into bite-sized pieces
2. **Heat**: Heat 2 tablespoons of olive oil in a large pan over medium-high heat
3. **Cook**: Add minced garlic first, then add your harder ingredients (like carrots or potatoes)
4. **Combine**: Add the rest of your ingredients and stir-fry for 5-7 minutes
5. **Season**: Add your preferred sauce and season with salt and pepper
6. **Serve**: Plate immediately and enjoy!

**Cooking Time**: 15 minutes  
**Serves**: 2-3 people

This recipe is a starting template. Feel free to adjust seasonings and cooking times based on your ingredient preferences!`

        return res.status(200).json({ 
            recipe: mockRecipe
        })

    } catch (error) {
        console.error('API Error:', error)
        return res.status(500).json({ error: 'Failed to generate recipe' })
    }
}


// import { HfInference } from '@huggingface/inference'

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
// `
// const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)
// ```

// **And your `.env` file needs to be:**
// ```
// VITE_HF_ACCESS_TOKEN='code'

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await hf.chatCompletion({
//             model: "mistralai/Ministral-3-14B-Instruct-2512",
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content
//     } catch (err) {
//         console.error(err.message)
//     }
// }
