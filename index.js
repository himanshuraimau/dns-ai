import { startUdpServer, createTxtAnswer, createResponse } from "denamed";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { config as configDotenv } from "dotenv";

configDotenv();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

console.log("Starting UDP server on port 3001...");

startUdpServer(async (query) => {
    const startTime = Date.now();
    const responses = [];

    for (const question of query.questions) {
        console.log("Received query: ", question);

        const prompt = `
        Answer the question with one word or sentence:
        Question: ${question.name.split('.').join(' ')};
        `;

        let result;
        try {
            result = await model.generateContent(prompt);
        } catch (error) {
            console.error("Error generating content: ", error);
            result = { response: { text: () => "Timeout or error occurred" } };
        }

        responses.push(createTxtAnswer(question, result.response.text()));
    }

    const responseTime = Date.now() - startTime;
    console.log(`Query processed in ${responseTime}ms`);

    return createResponse(query, responses);
}, {
    port: 3001
});