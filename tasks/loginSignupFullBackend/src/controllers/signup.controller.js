const userService = require('../services/signup.service');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);

        return res.status(201).json({
            message: 'User created',
            user,
        });
    } catch (err) {
        return res.status(err.status || 500).json({
            message: err.message || 'Server error',
        });
    }
};

module.exports = { createUser };
