import { GoogleGenerativeAI } from "@google/generative-ai";
import express, { Router } from "express";
import dotenv from "dotenv"
dotenv.config()

export default function amigoRouter(): Router {
    const router = express.Router();


    router.post("/analyze-text", async(req, res) => {
        console.log("Analysing text")
          const { question } = req.body
          console.log(question)
        
          const genAi = new GoogleGenerativeAI(process.env.GENAI_API as string)
          const model = genAi.getGenerativeModel({ model: "gemini-pro" })
          const prompt = `
As an individual who is fluent in English, your task is to respond to the following question in a friendly manner and engage in an interactive conversation. The question you will respond to is: "${question}". Begin by crafting a welcoming and engaging response to the query, and remember to ask a follow-up question to keep the conversation flowing smoothly. This exercise is designed to help improve English speaking skills through interactive dialogue. Show empathy, maintain a friendly tone, and encourage further communication by showing interest in the topic at hand. Remember to adapt your responses based on the context of the question and build rapport with the other party through meaningful conversation.
    

`

          const result = await model.generateContent(prompt)
          const response = await result.response
          const text = response.text()
          console.log(text)
          res.json({ answer: text })

    })
  return router
}