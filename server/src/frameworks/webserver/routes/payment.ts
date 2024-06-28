
import express, { Router } from "express"
import Stripe from "stripe"
import dotenv from "dotenv"
dotenv.config()

export default function paymentRouter(): Router {
    const router = express.Router()
    const stripe = new Stripe(
        "sk_test_51PWGZxRt3sCPNpRIKZ2IrNZBc7wvo1ws45BfMq5MbPT56gHEREt1Fm9g5IzkDBOM3n6pKfuoG4zW9AbF41TTQvbk00Bz6aaKFd",
        { apiVersion: "2024-06-20" }
    )
    
    router.post("/payment_intent",async (req, res) => {
        const { payment_method, amount, currency } = req.body
        console.log(payment_method, amount, currency)
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: currency,
                payment_method: payment_method,
                confirmation_method: "manual",
                confirm: true,
            })
            console.log(paymentIntent)
            res.json({ client_secret: paymentIntent.client_secret })
        } catch (err) {
            res.status(500).send(err)
        }
    })
    
    return router
}
