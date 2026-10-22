const express = require("express");
const allRoutes = require("./routes/index.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", allRoutes);
app.use("/", allRoutes);

module.exports = app;
