const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FluencyAnalysisSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    analysis: {
        english_sentence_structures: {
            type: String,
            required: true,
        },
        filler_and_repetitive_words: {
            type: String,
            required: true,
        },
        fluency_score: {
            type: String,
            required: true,
        },
        feedback_for_improvement: {
            type: [String],
            required: true,
        },
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})




// Create the model
export const fluencyModel = mongoose.model("FluencyModel", FluencyAnalysisSchema)
