import {  trainerUseCase } from "../../app/useCases/trainer";
import { Request, Response } from "express";
interface customRequest extends Request {
    user?: any
}
export class TrainerController {
  constructor(private _trainerUseCase: trainerUseCase) {}


 async completeProfile(req:customRequest, res:Response): Promise<void> {
       try {
         const {fullName, bio, specialization, experience, qualifications, timeZone, hourlyRate}= req.body
         console.log("id from authenticated user", req.user?._id)
         const profileCompleted= await this._trainerUseCase.completeProfile(fullName, bio, specialization, experience, qualifications, timeZone, hourlyRate, req.user?._id)
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
    
      return dashboard
    } catch (error) {
      console.log(error)
    }
  }
}