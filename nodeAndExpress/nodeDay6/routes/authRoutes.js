const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const router = express.Router();


const adminEmail = "admin@day6.local";
const adminPassword = "admin123";
const adminPasswordHash = bcrypt.hashSync(adminPassword, 10);

// so JWTs work before configuring a .env file.
const jwtSecret = process.env.JWT_SECRET || "day6-study-secret-hola";

function createToken(userId, role) {
    return jwt.sign({ userId, role }, jwtSecret, { expiresIn: "1d" });
}

function publicUser(user) {
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
}

async function sendWelcomeEmail(email, name) { 
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT),
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "Welcome to Day 6",
        text: `Hi ${name}, your account has been created.`,
    });

    return true;
}

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const existingUser = await User.findOne({ email: normalizedEmail });

        if (existingUser) {
            return res.status(409).json({ message: "An account with this email already exists" });
        }

        const saltHai = 10;
        const hashedPassword = await bcrypt.hash(password, saltHai);
        const user = await User.create({
            name,
            email: normalizedEmail,
            password: hashedPassword,
        });

        let welcomeEmailSent = false;
        try {
            welcomeEmailSent = await sendWelcomeEmail(user.email, user.name);
        } catch (emailError) {
            console.error("Welcome email could not be sent:", emailError.message);
        }

        return res.status(201).json({
            message: "Account created successfully",
            token: createToken(user._id.toString(), user.role),
            user: publicUser(user),
            welcomeEmailSent,
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: "An account with this email already exists" });
        }

        return res.status(500).json({ message: "Signup failed", error: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const normalizedEmail = email.trim().toLowerCase();

        if (normalizedEmail === adminEmail && await bcrypt.compare(password, adminPasswordHash)) {
            const admin = {
                _id: "hardcoded-admin",
                name: "Admin",
                email: adminEmail,
                role: "admin",
            };

            return res.status(200).json({
                message: "Admin login successful",
                token: createToken(admin._id, admin.role),
                user: publicUser(admin),
            });
        }

        const user = await User.findOne({ email: normalizedEmail });
        const passwordMatches = user && await bcrypt.compare(password, user.password);

        if (!passwordMatches) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        return res.status(200).json({
            message: "Login successful",
            token: createToken(user._id.toString(), user.role),
            user: publicUser(user),
        });
    } catch (error) {
        return res.status(500).json({ message: "Login failed", error: error.message });
    }
});

module.exports = router;
