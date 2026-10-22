const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const Users = require('../models/users.model');

const loginSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().required(),
});

const loginUser = async (data) => {
    const { error, value } = loginSchema.validate(data, {
        abortEarly: true,
        stripUnknown: true,
    });

    if (error) {
        const validationError = new Error(error.details[0].message.replace(/"/g, ''));
        validationError.status = 400 ;
        throw validationError;
    }

    const { email, password } = value;

    const user = await Users.findOne({ email: email.toLowerCase() }).select('+password');

    if (!user) {
        const authError = new Error('Invalid email or password');
        authError.status = 401;
        throw authError;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        const authError = new Error('Invalid email or password');
        authError.status = 401;
        throw authError;
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
    
    const userObj  = user.toObject();

    // send login notification (best-effort)
    try {
        const sendEmail = require('../utils/sendEmail');
        await sendEmail({
            to: user.email,
            subject: 'New login to your account',
            text: `Hello ${user.firstname || ''}, you just logged in to your account. If this wasn't you, please secure your account.`,
        });
    } catch (e) {
        console.error('Failed to send login email', e.message || e);
    }

    // delete userObj.password;
    // delete userObj.confirmPassword;

    return {
        user: userObj,
        token,
    };
};

module.exports = { loginUser };
