const {
    filterQuestionsService,
} = require("../services/randomQuestion.service");

const {
    correctQuestionService,
} = require("../services/answer.service");

const filterQuestions = async (req, res) => {
    try {
        const questions = await filterQuestionsService();

        return res.status(200).json({
            message: "Questions listed successfully",
            data: questions,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error listing questions",
            error: error.message,
        });
    }
};

const correctQuestions = async (req,res)=>{
    try{
        const correctQuestions = await correctQuestionService();

        return res.status(200).json({
            massage:"all correct questions : ",
            data: correctQuestions,
        });
    }catch(error){
        return res.status(500).json({
            message:"cant find correct questions",
            error:error.message,
        })
    }
}
module.exports = {
    filterQuestions,
    correctQuestions,
};
