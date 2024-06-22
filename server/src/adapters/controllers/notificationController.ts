import { Console } from "console"
import { trainerUseCase } from "../../app/useCases/trainer"
import { Request, Response } from "express"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { mockUseCase } from "../../app/useCases/mock"
import { notificationUseCase } from "../../app/useCases/notification"
interface customRequest extends Request {
    user?: any
}
export class notificationController {
    constructor(private _notificationUseCase: notificationUseCase) {}

    async sendNotification(req: customRequest, res: Response): Promise<void> {
        try {
            const { message } = req.body;
            const notified = await this._notificationUseCase.sendNotification(message, req.user?._id);
            res.json(notified);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while sending the notification.' });
        }
    }
}
