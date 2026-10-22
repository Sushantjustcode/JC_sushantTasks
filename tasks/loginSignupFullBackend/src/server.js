import express from "express";
import mongoConnector from "./src/config/db.js";


const app = express();
app.use(express.json());

const startServer = async () => {
  try {
    await mongoConnector();

    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
