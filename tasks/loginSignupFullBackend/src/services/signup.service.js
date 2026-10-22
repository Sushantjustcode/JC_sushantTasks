const bcrypt = require('bcrypt');
const Joi = require('joi');
const Users = require('../models/users.model');

const signupSchema = Joi.object({
    firstname: Joi.string().trim().min(2).required(),
    lastname: Joi.string().trim().min(2).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[A-Za-z])(?=.*\d).*$/).required().messages({
        'string.min': 'Password must be at least 8 characters long',
        'string.pattern.base': 'Password must contain at least one letter and one number',
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.only': 'Passwords do not match',
        'any.required': 'Confirm password is required',
    }),
    age: Joi.number().integer().min(1).required(),
    dateOfBirth: Joi.date().required(),
    phone: Joi.string().trim().pattern(/^[0-9]{10,15}$/).optional().allow(''),
    gender: Joi.string().trim().lowercase().valid('male', 'female', 'other').required(),
    address: Joi.object({
        state: Joi.string().trim().optional(),
        district: Joi.string().trim().optional(),
        Address1: Joi.string().trim().optional().allow(''),
        Address2: Joi.string().trim().optional().allow(''),
        pinCode: Joi.number().integer().min(4).max(10).optional(),
    }).optional(),
    role: Joi.string().trim().lowercase().valid('admin', 'user').optional(),
}).required();

const createUser = async (data) => {
    const { error, value } = signupSchema.validate(data, {
        abortEarly: true,
        stripUnknown: true,
    });

    if (error) {
        const validationError = new Error(error.details[0].message.replace(/"/g, ''));
        validationError.status = 400;
        throw validationError;
    }

    const {
        firstname,
        lastname,
        email,
        password,
        age,
        dateOfBirth,
        phone,
        gender,
        address,
        role,
    } = value;

    const normalizedRole = (role || 'user').toString().trim().toLowerCase();

    const existingUser = await Users.findOne({ email: email.toLowerCase() });

    if (existingUser) {
        const error = new Error('Email already in use');
        error.status = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const user = await Users.create({
        firstname,
        lastname,
        email: email.toLowerCase(),
        password: hashedPassword,
        age,
        dateOfBirth,
        phone,
        gender,
        address,
        role: normalizedRole,
        otp,
        otpExpires,
    });

    const sendEmail = require('../utils/sendEmail');
    try {
        await sendEmail({
            to: user.email,
            subject: 'Your signup OTP',
            text: `Your verification OTP is ${otp}. It expires in 10 minutes.`,
        });
    } catch (e) {
        console.error('Failed sending OTP email', e.message || e);
    }

    const userObj = user.toObject();
    delete userObj.otp;
    delete userObj.otpExpires;
    return userObj;
};

module.exports = { createUser };
