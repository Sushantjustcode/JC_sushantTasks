const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/mainRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", mainRoutes);

app.get("/", (req, res) => {
  res.json({ message: "User CRUD API is running" });
});


mongoose
  .connect("mongodb://127.0.0.1:27017/sushantCRUD")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => {
      console.log("Server running at http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

  
