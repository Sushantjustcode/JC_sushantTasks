require("dotenv").config();
const app = require("./app");
const mongoConnector = require("./src/config/db.js");

const startServer = async () => {
    await mongoConnector();
    app.listen(process.env.PORT || 3000, () => {
        console.log("server is running");
    });
};

startServer();
