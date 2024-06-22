export interface notificationRepository{
    sendNotification: (message:string , id:string) => Promise<any>
}