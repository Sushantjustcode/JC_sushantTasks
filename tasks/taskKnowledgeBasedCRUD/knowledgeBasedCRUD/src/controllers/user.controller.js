const User = require("../models/user.model");
const RandomQuestion = require("../models/randomQuestion.model");
const QuestionAnswer = require("../models/questionAnswer.model");

const createUser = async (req, res) => {
    try {
        const { name, email, role } = req.body;
        const user = new User({ name, email, role });
        await user.save();
        return res.status(201).json({ message: "User created", data: user });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const listUsers = async (req, res) => {
    try {
        const users = await User.find({ isDeleted: false }).sort({ name: 1 });
        return res.status(200).json({ data: users });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user || user.isDeleted) return res.status(404).json({ message: "User not found" });
        return res.status(200).json({ data: user });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const user = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!user) return res.status(404).json({ message: "User not found" });
        return res.status(200).json({ message: "User updated", data: user });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        if (!user) return res.status(404).json({ message: "User not found" });
        return res.status(200).json({ message: "User deleted (soft)", data: user });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

// Get all questions created by a user
const getUserQuestions = async (req, res) => {
    try {
        const { id } = req.params;
        const questions = await RandomQuestion.find({ addedBy: id, isDeleted: false });
        return res.status(200).json({ data: questions });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Get all answers by a user
const getUserAnswers = async (req, res) => {
    try {
        const { id } = req.params;
        const answers = await QuestionAnswer.find({ answeredBy: id, isDeleted: false }).populate("randomQuestion");
        return res.status(200).json({ data: answers });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createUser,
    listUsers,
    getUser,
    updateUser,
    deleteUser,
    getUserQuestions,
    getUserAnswers,
};
