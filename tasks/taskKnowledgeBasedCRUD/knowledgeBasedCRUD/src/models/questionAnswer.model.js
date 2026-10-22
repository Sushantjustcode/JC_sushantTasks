const mongoose = require("mongoose");

const questionAnswerSchema = new mongoose.Schema(
    {
        randomQuestion: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RandomQuestion",
            required: true,
        },
        answer: {
            type: String,
            required: true,
            trim: true,
        },
        correct: {
            type: Boolean,
            default: false,
        },
        count: {
            type: Number,
            default: 0,
        },
        refOfAns: {
            type: String,
            default: "",
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        answeredBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
        attempts: {
            type: Number,
            default: 0,
        },
        lastReviewedAt: {
            type: Date,
        },
        reviewHistory: [
            {
                reviewedAt: { type: Date, default: Date.now },
                reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                notes: { type: String, default: "" },
                result: { type: String, enum: ["correct", "incorrect", "skipped"], default: "skipped" },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("QuestionAnswer", questionAnswerSchema);
