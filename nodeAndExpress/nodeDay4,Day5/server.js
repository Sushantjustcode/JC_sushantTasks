const express = require("express");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/mainRoutes");
const app = express();

app.use(express.json());
app.use("/lookuppractice", mainRoutes);

// Connect MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/sushantPracticeLookupAndRedis")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () => {
            console.log("Server running at http://localhost:3000");
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });
