const loginService = require('../services/login.service');

const loginUser = async (req, res) => {
    try {
        const result = await loginService.loginUser(req.body);
        const { token } = result;
        return res.status(200).json({
            message: 'Login successful',
            ...result,
            token: `this is JWT token ${token}`,
        });
    } catch (err) {
        return res.status(err.status || 500).json({
            message: err.message || 'Server error',
        });
    }
};

module.exports = { loginUser };
