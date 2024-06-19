import { trainerRepository } from "../../../../app/repositories/trainerRepository"
import { UserModel } from "../models/userModel"

export interface AvailableSlot {
    dayOfWeek: string
    timeRange: string
}
export class trainerRepositoryMongoDB implements trainerRepository {
    async completeProfile(
        fullName: string,
        bio: string,
        specialization: string,
        experience: number,
        qualifications: string,
        timeZone: string,
        hourlyRate: number,
        AvailableSlots: AvailableSlot[],
        id: string
    ): Promise<any> {
        console.log("user id from mongo", id)
        try {
            return await UserModel.findByIdAndUpdate(
                id,
                {
                    $set: {
                        fullName,
                        bio,
                        specialization,
                        experience,
                        qualifications,
                        timeZone,
                        hourlyRate,
                        AvailableSlots,
                        profileComplete: true,
                    },
                },
                { new: true }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async getDashboard(id: string): Promise<any> {
        try {
            return await UserModel.findById(id)
        } catch (error) {
            console.log(error)
        }
    }


    async getAllTrainers(): Promise<any> {
        try {
            return await UserModel.find({role:"Trainer"})
        } catch (error) {
            console.log(error)
        }
    }
}
