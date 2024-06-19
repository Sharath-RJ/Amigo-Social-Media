export interface trainerRepository {
    completeProfile(fullName: string, bio: string, specialization: string, experience: number, qualifications: string, timeZone: string, hourlyRate: number, id: string): Promise<any>
    getDashboard(id: string): Promise<any>
}