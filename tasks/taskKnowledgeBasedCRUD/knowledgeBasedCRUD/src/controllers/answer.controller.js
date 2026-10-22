const { answerService, deleteAnswerService } = require("../services/answer.service");

const answer = async (req, res) => {
    try {
        // normalize common field names
        const questionId = req.body.questionId || req.body.questionid || req.body.id || req.body.question_id;
        const question = req.body.question || req.body.q;
        const submittedAnswer = req.body.answer || req.body.Answer || req.body.response || req.body.ans;
        const headerUser = req.headers['x-user-id'];
        const answeredBy = headerUser || req.body.answeredBy;

        const result = await answerService({
            questionId,
            question,
            answer: submittedAnswer,
            answeredBy,
        });

        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteAnswer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAnswer = await deleteAnswerService({ id });

        return res.status(200).json({
            success: true,
            message: "Answer deleted successfully",
            data: deletedAnswer,
        });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    answer,
    deleteAnswer,
};
