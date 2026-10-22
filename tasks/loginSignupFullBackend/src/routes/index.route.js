const express = require('express');
const router = express.Router();

const loginRoutes = require('./login.route');
const signupRoutes = require('./signup.route');
const verifyRoutes = require('./verify.route');
const userRoutes = require('./user.route');
const { protect } = require('../middleware/auth.middleware');

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/verify', verifyRoutes);
router.use('/user', userRoutes);

router.get('/profile', protect, (req, res) => {
    res.status(200).json({
        message: 'Protected route accessed successfully',
        user: req.user,
    });
});

module.exports = router;
