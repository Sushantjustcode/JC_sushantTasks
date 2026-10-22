require('dotenv').config();

const express = require("express");
const app = express();
const indexRoutes = require("./src/routes/index.routes");

app.use(express.json());
app.use("/api", indexRoutes);

module.exports = app;
