const mongoose = require("mongoose");
const Joi = require("joi");
const RandomQuestion = require("../models/randomQuestion.model");
const QuestionAnswer = require("../models/questionAnswer.model");

const normalizeQuestionId = (id) => {
    if (typeof id !== "string") return id;
    return id.startsWith(":") ? id.slice(1) : id;
};

const questionValidationSchema = Joi.object({
    question: Joi.string().trim().min(3).required().messages({
        "string.empty": "question is required.",
        "string.min": "question must be at least 3 characters long.",

        "any.required": "question is required.",
    }),
    answerKeywords: Joi.array()
        .items(Joi.string().trim().min(1).required())
        .min(1)
        .required()
        .messages({
            "array.base": "answerKeywords must be an array.",
            "array.min": "answerKeywords must contain at least one item.",
            "any.required": "answerKeywords is required.",
            "array.includesRequiredUnknowns": "Each answer keyword must be a non-empty string.",
        }),
});


const updateQuestionValidationSchema = Joi.object({
    question: Joi.string().trim().min(3).optional().messages({
        "string.empty": "question cannot be empty.",
        "string.min": "question must be at least 3 characters long.",
    }),
    answerKeywords: Joi.array()
        .items(Joi.string().trim().min(1).required())
        .min(1)
        .optional()
        .messages({
            "array.base": "answerKeywords must be an array.",
            "array.min": "answerKeywords must contain at least one item.",
            "array.includesRequiredUnknowns": "Each answer keyword must be a non-empty string.",
        }),
}).min(1);

const questionIdValidationSchema = Joi.string()
    .trim()
    .length(24)
    .hex()
    .required()
    .messages({
        "string.empty": "Question id is required.",
        "string.length": "Invalid question id format.",
        "string.hex": "Invalid question id format.",
        "any.required": "Question id is required.",
    });

const validateRequest = (schema, payload) => {
    const { error, value } = schema.validate(payload, { abortEarly: true });

    if (error) {
        const validationError = new Error(error.details[0].message);
        validationError.statusCode = 400;
        throw validationError;
    }

    return value;
};

const createRandomQuestion = async ({ question, answerKeywords, referenceLink, category, isImportant, isInterviewRelated, addedBy, status }) => {
    const validatedData = validateRequest(questionValidationSchema, { question, answerKeywords });

    const doc = {
        question: validatedData.question,
        answerKeywords: validatedData.answerKeywords,
    };

    if (referenceLink !== undefined) doc.referenceLink = referenceLink;
    if (category !== undefined) doc.category = category;
    if (isImportant !== undefined) doc.isImportant = isImportant;
    if (isInterviewRelated !== undefined) doc.isInterviewRelated = isInterviewRelated;
    if (addedBy !== undefined) doc.addedBy = addedBy;
    if (status !== undefined) doc.status = status;

    return RandomQuestion.create(doc);
};

const updateRandomQuestion = async ({ id, question, answerKeywords }) => {
    const normalizedId = normalizeQuestionId(id);
    validateRequest(questionIdValidationSchema, normalizedId);

    const validatedUpdate = validateRequest(updateQuestionValidationSchema, {
        question,
        answerKeywords,
    });

    const updateFields = {};

    if (validatedUpdate.question !== undefined) updateFields.question = validatedUpdate.question;
    if (validatedUpdate.answerKeywords !== undefined) {
        updateFields.answerKeywords = validatedUpdate.answerKeywords;
    }

    const updatedQuestion = await RandomQuestion.findOneAndUpdate(
        { _id: normalizedId, isDeleted: false },
        updateFields,
        { new: true, runValidators: true }
    );

    if (!updatedQuestion) {
        const error = new Error("Question not found for the given id.");
        error.statusCode = 404;
        throw error;
    }

    return updatedQuestion;
};

const deleteRandomQuestion = async ({ id }) => {
    const normalizedId = normalizeQuestionId(id);
    validateRequest(questionIdValidationSchema, normalizedId);

    const existingQuestion = await RandomQuestion.findOne({
        _id: normalizedId,
        isDeleted: false,
    });

    if (!existingQuestion) {
        const error = new Error("Question not found for the given id.");
        error.statusCode = 404;
        throw error;
    }

    ;

    const deletedQuestion = await RandomQuestion.findOneAndUpdate(
        { _id: normalizedId, isDeleted: false },
        { $set: { isDeleted: true } },
        { new: true }
    );

    await QuestionAnswer.updateMany(
        { randomQuestion: normalizedId, isDeleted: false },
        { $set: { isDeleted: true } }
    );

    return deletedQuestion;
};

const filterQuestionsService = async () => {
    return RandomQuestion.find({ isDeleted: false }).sort({ createdAt: -1 });
};

module.exports = {
    createRandomQuestion,
    updateRandomQuestion,
    deleteRandomQuestion,
    filterQuestionsService,
};
