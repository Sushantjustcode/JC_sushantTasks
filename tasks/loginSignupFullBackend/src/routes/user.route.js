const express = require('express');
const router = express.Router();
const { updateUser, deleteUser } = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware');

router.patch('/update', protect, updateUser);
router.delete('/delete', protect, deleteUser);

module.exports = router;
