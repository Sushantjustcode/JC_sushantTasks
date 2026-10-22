const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

// Connect MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/sushantCrudPractice")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () => {
            console.log("Server running at http://localhost:3000");
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });
