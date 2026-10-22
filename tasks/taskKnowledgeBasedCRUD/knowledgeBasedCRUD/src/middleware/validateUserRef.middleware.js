const mongoose = require("mongoose");
const User = require("../models/user.model");

async function validateUserRef(req, res, next) {
    // allow user id from body or from header `x-user-id` (useful for simple testing)
    const userId = req.body.addedBy || req.body.answeredBy || req.headers['x-user-id'];
    if (!userId) return next();
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user id format" });
    }
    const user = await User.findById(userId);
    if (!user || user.isDeleted) return res.status(404).json({ message: "User not found" });
    next();
}

module.exports = validateUserRef;
