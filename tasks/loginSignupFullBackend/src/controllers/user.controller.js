const userService = require('../services/user.service');

const updateUser = async (req, res) => {
  try {
    const id = req.query.id;
    const user = await userService.updateUser(id, req.body);
    return res.status(200).json({ message: 'User updated', user });
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || 'Server error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.query.id;
    const result = await userService.softDeleteUser(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || 'Server error' });
  }
};

module.exports = { updateUser, deleteUser };
