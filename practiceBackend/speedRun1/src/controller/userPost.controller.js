const { createUser, updateUser, deleteUser } = require('../services/createUser.service');

const userPost = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await createUser(newUser);

        return res.status(201).json({
            message: 'User created successfully',
            data: user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

const userUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await updateUser(id, req.body);

        return res.status(200).json({
            message: 'User updated successfully',
            data: updatedUser,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

const userDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUser(id);

        return res.status(200).json({
            message: 'User deleted successfully',
            data: deletedUser,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = { userPost, userUpdate, userDelete };
