const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoURI =
            process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/loginSignupBackend";

        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("mongoose got an error", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
