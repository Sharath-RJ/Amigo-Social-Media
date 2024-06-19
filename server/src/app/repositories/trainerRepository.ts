
export interface AvailableSlot {
    dayOfWeek: string;
    timeRange: string;
}
export interface trainerRepository {
    completeProfile(fullName: string, bio: string, specialization: string, experience: number, qualifications: string, timeZone: string, hourlyRate: number,AvailableSlots:AvailableSlot[], id: string): Promise<any>
    getDashboard(id: string): Promise<any>
    getAllTrainers():Promise<any>
    
}