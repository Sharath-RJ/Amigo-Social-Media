import { trainerRepository } from "../repositories/trainerRepository";

export interface AvailableSlot {
    dayOfWeek: string
    timeRange: string
}
export class trainerUseCase {
    constructor(private _trainerRepository: trainerRepository) {}

    async completeProfile(fullName: string, bio: string, specialization: string, 
        experience: number, qualifications: string, timeZone: string, hourlyRate: number,AvailableSlots:AvailableSlot[], id: string) {

        return await this._trainerRepository.completeProfile(fullName, bio, specialization, experience, qualifications, timeZone, hourlyRate,AvailableSlots, id)
    }


    async getDashboard(id: string) {

        return await this._trainerRepository.getDashboard(id)
    }

    async getAllTrainers(){

        return await this._trainerRepository.getAllTrainers()
    }
}