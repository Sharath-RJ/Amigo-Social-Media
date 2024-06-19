import {  trainerUseCase } from "../../app/useCases/trainer";
import { Request, Response } from "express";
interface customRequest extends Request {
    user?: any
}
export class TrainerController {
  constructor(private _trainerUseCase: trainerUseCase) {}


 async completeProfile(req:customRequest, res:Response): Promise<void> {
       try {
         const {fullName, bio, specialization, experience, qualifications, timeZone, hourlyRate, AvailableSlots}= req.body
         console.log("id from authenticated user", req.user?._id)
         const profileCompleted= await this._trainerUseCase.completeProfile(fullName, bio, specialization, experience, qualifications, timeZone, hourlyRate,AvailableSlots, req.user?._id)
         console.log("completed profile",profileCompleted)
         if(profileCompleted) {
            res.status(200).json(profileCompleted)
         }

       } catch (error) {
          console.log(error)
       }
  }

  async getDashboard(req:customRequest, res:Response):Promise<any> {
    try {
      const dashboard = await this._trainerUseCase.getDashboard(req.user?._id)
        console.log(dashboard)
      if(dashboard){
        res.status(200).json(dashboard)
      }
    

    } catch (error) {
      console.log(error)
    }
  }

  async getAllTrainers(req:customRequest, res:Response):Promise<any> {
    try {
      const trainers = await this._trainerUseCase.getAllTrainers()
    
        console.log(trainers)
      if(trainers){
        res.status(200).json(trainers)
      }
    
    }catch (error) {
      console.log(error)
    }
  }
}