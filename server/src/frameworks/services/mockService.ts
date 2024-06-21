import { MockServiceInterface } from "../../app/services/mockServiceInterface";
import { GoogleGenerativeAI } from "@google/generative-ai"

export  class mockservice implements MockServiceInterface{

  async  generateFeedback(Questions: any, Answers: any, score: number):Promise<any> {
        console.log("generating feedback")
        
        console.log(Questions)
        console.log(Answers)
        console.log("Score", score)
        const genAi = new GoogleGenerativeAI(process.env.GENAI_API as string)
        const model = genAi.getGenerativeModel({ model: "gemini-pro" })
        const prompt = `
Please evaluate a user's English proficiency level based on their answers to a set of questions. Here are the details:

- Questions: ${Questions} (This is an array of objects, each containing a question and its correct answer)
- User's Answers: ${Answers}
- User's Score: ${score}

Tasks:
1. Verify that the user's answers match the correct answers in the Questions array.
2. Use the provided score (${score}) to generate the results.
3. Provide a star rating out of 5 based on the score. It must be a number between 1 and 5.
4. Assess the user's English proficiency level as either beginner, intermediate, or advanced based on their performance in different sections:
   - The first 5 questions are beginner level.
   - The next 5 questions are intermediate level.
   - The remaining 5 questions are advanced level.
   - If the user performs well in the first 5 questions, they are at the beginner level. Similarly, evaluate intermediate and advanced levels based on the respective questions.
5. Offer constructive feedback to help the user improve their English skills. Include what they need to learn next and identify any weak areas.

Please provide the evaluation in the following  format:note that it should be a valid JSON should not contain any special characters and unwanted strings at the begining and even the end of the following format.

{
  "total_score": ${score},
  "star_rating": "<star_rating>",
  "proficiency_level": "<proficiency_level>",
  "feedback": "<feedback>"
}

`

        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()
        console.log(text)
        return JSON.parse(text)

    }
}