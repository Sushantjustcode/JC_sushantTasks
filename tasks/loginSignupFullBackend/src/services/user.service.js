const Users = require('../models/users.model');

const updateUser = async (id, data) => {
    if (!id) {
        const error = new Error('User id is required');
        error.status = 400;
        throw error;
    }

    const allowed = { ...data };
    // prevent changing protected fields
    delete allowed._id;
    delete allowed.isDeleted;
    delete allowed.otp;
    delete allowed.otpExpires;

    const user = await Users.findByIdAndUpdate(id, allowed, { new: true }).select('-password -confirmPassword');
    if (!user) {
        const error = new Error('User not found');
        error.status = 404;
        throw error;
    }

    return user.toObject();
};

const softDeleteUser = async (id) => {
    if (!id) {
        const error = new Error('User id is required');
        error.status = 400;
        throw error;
    }

    const user = await Users.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!user) {
        const error = new Error('User not found');
        error.status = 404;
        throw error;
    }

    return { message: 'User soft deleted' };
};

module.exports = { updateUser, softDeleteUser };
