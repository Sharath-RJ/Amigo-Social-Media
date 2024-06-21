import { mockRepository } from "../../../../app/repositories/mockTestRepository";
import { MockTest } from "../models/mockTest";

export class mockTestRepositoryMongoDB   implements mockRepository{
    async  submitQuestion(score: number, proficiencyLevel: string, feedback: string, user:string): Promise<any>{
       try {
          await MockTest.create({user, score, proficiencyLevel, feedback }) 
       } catch (error) {
         console.log(error)
       }
    }
}