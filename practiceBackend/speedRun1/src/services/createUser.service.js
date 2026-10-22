const User = require('../models/users.model');

const createUser = async (userData) => {
    if (!userData) {
        throw new Error('User data is required');
    }

    const result = await User.create(userData);
    return result;
};

const updateUser = async (id, userData) => {
    if (!id) {
        throw new Error('User id is required');
    }

    if (!userData || Object.keys(userData).length === 0) {
        throw new Error('Update data is required');
    }

    const updatedUser = await User.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators: true,
    });

    if (!updatedUser) {
        throw new Error('User not found');
    }

    return updatedUser;
};

const deleteUser = async (id) => {
    if (!id) {
        throw new Error('User id is required');
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
        throw new Error('User not found');
    }

    return deletedUser;
};

module.exports = { createUser, updateUser, deleteUser };
