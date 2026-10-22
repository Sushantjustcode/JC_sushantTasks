const RandomQuestion = require("../models/randomQuestion.model");
const QuestionAnswer = require("../models/questionAnswer.model");

const answerService = async ({ questionId, question, answer, answeredBy }) => {
    const targetQuestionId = questionId || question?._id || question?.id;

    if (!targetQuestionId) {
        const error = new Error("questionId is required. Use the id from GET /questions route");
        error.statusCode = 400;
        throw error;
    }

    if (!answer || String(answer).trim() === "") {
        const error = new Error("answer MSUT be entered");
        error.statusCode = 400;
        throw error;
    }

    const currentQuestion = await RandomQuestion.findOne({
        _id: targetQuestionId,
        isDeleted: false,
    });

    if (!currentQuestion) {
        const error = new Error("Question not found for the given id");
        error.statusCode = 404;
        throw error;
    }

    const normalizedAnswer = String(answer).trim().toLowerCase();
    const keywords = (currentQuestion.answerKeywords || [])
        .map((keyword) => String(keyword).trim().toLowerCase());

    const matchedKeywords = keywords.filter((keyword) =>
        normalizedAnswer.includes(keyword),
    );
    const isCorrect = matchedKeywords.length > 0;


    if (answeredBy) {
        const existing = await QuestionAnswer.findOne({ randomQuestion: currentQuestion._id, answeredBy, isDeleted: false });
        const reviewEntry = {
            reviewedAt: new Date(),
            reviewedBy: answeredBy,
            result: isCorrect ? "correct" : "incorrect",
            notes: "",
        };

        if (existing) {
            const updates = {
                answer: String(answer).trim(),
                correct: isCorrect,
                refOfAns: "",
                lastReviewedAt: new Date(),
            };

            if (isCorrect) {
                updates.attempts = existing.attempts || 0;
                updates.count = (existing.count || 0) + 1;
            } else {
                updates.attempts = (existing.attempts || 0) + 1;
            }

            const updated = await QuestionAnswer.findByIdAndUpdate(
                existing._id,
                { $set: updates, $push: { reviewHistory: reviewEntry } },
                { new: true }
            );

            return {
                success: true,
                isCorrect,
                data: updated,
            };
        }

        const createdNew = await QuestionAnswer.create({
            randomQuestion: currentQuestion._id,
            answer: String(answer).trim(),
            correct: isCorrect,
            count: isCorrect ? 1 : 0,
            refOfAns: "",
            answeredBy: answeredBy,
            attempts: isCorrect ? 0 : 1,
            lastReviewedAt: isCorrect ? new Date() : new Date(),
            reviewHistory: [reviewEntry],
        });

        return {
            success: true,
            isCorrect,
            data: createdNew,
        };
    }

    const created = await QuestionAnswer.create({
        randomQuestion: currentQuestion._id,
        answer: String(answer).trim(),
        correct: isCorrect,
        count: isCorrect ? 1 : 0,
        refOfAns: "",
        attempts: isCorrect ? 0 : 1,
        lastReviewedAt: isCorrect ? new Date() : undefined,
        reviewHistory: isCorrect
            ? [
                {
                    reviewedAt: new Date(),
                    reviewedBy: null,
                    result: "correct",
                    notes: "",
                },
            ]
            : [],
    });

    return {
        success: true,
        isCorrect,
        data: created,
    };
};

const deleteAnswerService = async ({ id }) => {
    if (!id) {
        const error = new Error("Answer id is required.");
        error.statusCode = 400;
        throw error;
    }

    const deletedAnswer = await QuestionAnswer.findOneAndUpdate(
        { _id: id, isDeleted: false },
        { $set: { isDeleted: true } },
        { new: true }
    );

    if (!deletedAnswer) {
        const error = new Error("Answer not found for the given id.");
        error.statusCode = 404;
        throw error;
    }

    return deletedAnswer;
};

const correctQuestionService = async () => {
    return QuestionAnswer.find({
        correct: true
    })
}

module.exports = {
    answerService,
    deleteAnswerService,
    correctQuestionService,
};
