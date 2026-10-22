require('dotenv').config();

const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.route");

app.use(express.json());
app.use("/api", indexRoutes);

module.exports = app;
