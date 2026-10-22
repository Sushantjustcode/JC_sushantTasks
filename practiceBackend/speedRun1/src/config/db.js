const mongoose = require("mongoose");

const mongoConnector = async () => {
    try {
        const mongoURI =
            process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/speedRun1";

        await mongoose.connect(mongoURI);
        console.log("MongoDB is connected...");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
};

module.exports = mongoConnector;
