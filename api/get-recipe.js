

import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { ingredients } = req.body
        
        if (!ingredients || !Array.isArray(ingredients)) {
            console.log("Invalid ingredients:", ingredients)
            return res.status(400).json({ error: 'Invalid ingredients' })
        }

        const token = process.env.HF_ACCESS_TOKEN
        console.log("Token exists:", !!token)
        
        if (!token) {
            return res.status(500).json({ error: 'Missing API token' })
        }

        const hf = new HfInference(token)
        const ingredientsString = ingredients.join(', ')

        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: [
                { 
                    role: "user", 
                    content: `${SYSTEM_PROMPT}. Give me a recipe using: ${ingredientsString}` 
                }
            ],
            max_tokens: 500,
        })

        console.log("Success!")
        return res.status(200).json({ 
            recipe: response.choices[0].message.content 
        })

    } catch (error) {
        console.error('API Error:', error)
        return res.status(500).json({ 
            error: 'Failed to generate recipe',
            details: error.message 
        })
    }
}



