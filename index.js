import { startUdpServer, createTxtAnswer, createResponse } from "denamed";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { config as configDotenv } from "dotenv";



configDotenv();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });


startUdpServer(async (query) => {
    const question = query.questions[0];
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

    return createResponse(query, [createTxtAnswer(question, result.response.text())]);
}, {
    port: 3001
});