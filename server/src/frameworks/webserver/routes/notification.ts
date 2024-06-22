import express, { Router } from "express";
import { trainerUseCase } from "../../../app/useCases/trainer";
import { TrainerController } from "../../../adapters/controllers/trainerController";
import { trainerRepositoryMongoDB } from "../../database/mongodb/repositories/trainerRepositoryMongoDB";
import authenticate from "../middlewares/authMiddleware";
import { notificationMongoDB } from "../../database/mongodb/repositories/notificationReppositoryMonogDB";
import { notificationUseCase } from "../../../app/useCases/notification";
import { notificationController } from "../../../adapters/controllers/notificationController";

export default function notificationRouter():Router{
   const router = express.Router();
     const notificationRepository = new notificationMongoDB()
     const notifiactionUseCaseINstance = new notificationUseCase(notificationRepository)
     const notificationControllerinstance = new notificationController(notifiactionUseCaseINstance)


     router.post("/sendNotification", authenticate, notificationControllerinstance.sendNotification.bind(notificationControllerinstance))

   

   return router
}