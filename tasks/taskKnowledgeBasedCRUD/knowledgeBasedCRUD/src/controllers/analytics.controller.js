const mongoose = require("mongoose");
const QuestionAnswer = require("../models/questionAnswer.model");
const RandomQuestion = require("../models/randomQuestion.model");


async function getAnalytics(req, res) {
    try {
        const lastReviewed = await QuestionAnswer.find({ lastReviewedAt: { $exists: true } })
            .sort({ lastReviewedAt: -1 })
            .limit(20)
            .populate("randomQuestion")
            .populate("answeredBy");


        const correctCount = await QuestionAnswer.countDocuments({ correct: true, isDeleted: false });


        const mostIncorrect = await QuestionAnswer.find({ isDeleted: false })
            .sort({ attempts: -1, incorrect: -1 })
            .limit(10)
            .populate("randomQuestion")
            .populate("answeredBy");

        // accuracy per category: join RandomQuestion -> category
        const accuracyPerCategory = await QuestionAnswer.aggregate([
            { $match: { isDeleted: false } },
            {
                $lookup: {
                    from: "randomquestions",
                    localField: "randomQuestion",
                    foreignField: "_id",
                    as: "rq",
                },
            },
            { $unwind: "$rq" },
            { $match: { "rq.isDeleted": false } },
            {
                $group: {
                    _id: "$rq.category",
                    total: { $sum: 1 },
                    correct: { $sum: { $cond: ["$correct", 1, 0] } },
                    incorrect: { $sum: { $cond: [{ $and: [{ $eq: ["$correct", false] }, { $ne: ["$correct", null] }] }, 1, 0] } },
                },
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "_id",
                    foreignField: "_id",
                    as: "category",
                },
            },
            { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    category: "$category.name",
                    total: 1,
                    correct: 1,
                    incorrect: 1,
                    accuracy: { $cond: [{ $eq: ["$total", 0] }, 0, { $multiply: [{ $divide: ["$correct", "$total"] }, 100] }] },
                },
            },
        ]);

        res.json({ lastReviewed, correctCount, mostIncorrect, accuracyPerCategory });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = { getAnalytics };
