const { getUsers } = require("../services/getUser.service");

const userGet = async (req, res) => {
    try {
        const users = await getUsers();

        return res.status(200).json({
            message: 'Users fetched successfully',
            data: users,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = { userGet };
