const { GoogleGenAI } = require('@google/genai');
const { buildSystemPrompt } = require('../utils/promptBuilder');

// Initialize Gemini client. Requires GEMINI_API_KEY environment variable.
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function generateNegotiationResponse(userData) {
    try {
        const systemInstruction = buildSystemPrompt(userData);
        const userQuery = userData.question && userData.question.trim() !== "" 
            ? userData.question 
            : "Provide a complete salary negotiation strategy based on my profile.";
        const response = await ai.models.generateContent({
            model: "gemini-flash-latest",
            contents: [
                {
                    role: "user",
                    parts: [{ text: userQuery }],
                }
            ],
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            }
        });

        let text = "";

        if (response && response.candidates && response.candidates.length > 0) {
            text = response.candidates[0].content.parts[0].text;
        }
        if(!text){
            return "No response generated. Please try again later.";
        }
        return text;
    }
    catch(error){
        console.error("Gemini API Error: ", error.message);
        return "Error generating strategy. Please try again.";
    }
}
module.exports = { generateNegotiationResponse };