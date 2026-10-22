const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
        select: false,
    },
    age: {
        type: Number,
    },
    dateOfBirth: {
        type: Date,
    },
    phone: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
    },
    address: {
        state: String,
        district: String,
        Address1: String,
        Address2: String,
        pinCode: Number,
    },
    role: {
        type: String,
        default: "user",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        select: false,
    },
    otpExpires: {
        type: Date,
        select: false,
    },
    isDeleted: {
        type: Boolean,
        default:false,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Users", usersSchema);
