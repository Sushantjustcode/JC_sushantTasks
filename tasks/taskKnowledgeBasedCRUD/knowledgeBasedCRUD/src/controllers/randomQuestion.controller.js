const RandomQuestion = require("../models/randomQuestion.model");
const {
    createRandomQuestion: createRandomQuestionService,
    updateRandomQuestion: updateRandomQuestionService,
    deleteRandomQuestion: deleteRandomQuestionService,
} = require("../services/randomQuestion.service");

const createRandomQuestion = async (req, res) => {
    try {
        const {
            question,
            answerKeywords,
            referenceLink,
            category,
            isImportant,
            isInterviewRelated,
            addedBy,
            status,
        } = req.body;

        const newQuestion = await createRandomQuestionService({
            question,
            answerKeywords,
            referenceLink,
            category,
            isImportant,
            isInterviewRelated,
            addedBy,
            status,
        });

        return res.status(201).json({
            message: "Random ques created",
            data: newQuestion,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

const getRandomQuestion = async (req, res) => {
    try {
        const randomQuestion = await RandomQuestion.aggregate([
            { $match: { isDeleted: false } },
            { $sample: { size: 1 } },
        ]);
        if (randomQuestion.length === 0) {
            return res.status(400).json({
                message: "No question found",
            });
        }

        return res.status(200).json({
            message: "Random question fetched successfully",
            data: randomQuestion[0],
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching random question",
            error: error.message,
        });
    }
};

const updateRandomQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answerKeywords } = req.body;

        const updatedQuestion = await updateRandomQuestionService({
            id,
            question,
            answerKeywords,
        });

        return res.status(200).json({
            message: "Question updated successfully",
            data: updatedQuestion,
        });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json({
            message: error.message,
        });
    }
};

const deleteRandomQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuestion = await deleteRandomQuestionService({ id });

        return res.status(200).json({
            message: "Question deleted successfully",
            data: deletedQuestion,
        });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json({
            message: error.message,
        });
    }
};

module.exports = {
    createRandomQuestion,
    getRandomQuestion,
    updateRandomQuestion,
    deleteRandomQuestion,
};
