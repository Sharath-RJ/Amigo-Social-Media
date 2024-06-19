import { trainerRepository } from "../repositories/trainerRepository";

export class trainerUseCase {
    constructor(private _trainerRepository: trainerRepository) {}

    async completeProfile(fullName: string, bio: string, specialization: string, 
        experience: number, qualifications: string, timeZone: string, hourlyRate: number, id: string) {

        return await this._trainerRepository.completeProfile(fullName, bio, specialization, experience, qualifications, timeZone, hourlyRate, id)
    }


    async getDashboard(id: string) {

        return await this._trainerRepository.getDashboard(id)
    }
}