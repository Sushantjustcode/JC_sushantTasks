import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/sushantCountryApi";

app.use(cors());
app.use(express.json());

// 1. Serve "uploads" folder so images can be viewed in browser at http://localhost:5000/uploads/filename
app.use("/uploads", express.static("uploads"));

// 2. Configure multer to save uploaded images inside "uploads" folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

const countrySchema = new mongoose.Schema(
    { _id: String, name: String, code: String },
    { collection: "countries", }
);

const stateSchema = new mongoose.Schema(
    { _id: String, country_id: String, name: String, code: String },
    { collection: "states",}
);

const citySchema = new mongoose.Schema(
    { _id: String, state_id: String, name: String, population: Number },
    { collection: "cities", }
);

const Country = mongoose.model("Country", countrySchema);
const State = mongoose.model("State", stateSchema);
const City = mongoose.model("City", citySchema);

app.get("/api", (req, res) => {
    res.json({ status: "ok" });
});

app.get("/api/countries", async (req, res) => {
    try {
        const countries = await Country.find({}).sort({ name: 1 }).lean();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/api/states/:countryId", async (req, res) => {
    try {
        const states = await State.find({ country_id: req.params.countryId })
            .sort({ name: 1 })
            .lean();
        res.json(states);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/api/cities/:stateId", async (req, res) => {
    try {
        const cities = await City.find({ state_id: req.params.stateId })
            .sort({ name: 1 })
            .lean();
        res.json(cities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/api/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No image file uploaded" });
    }

    const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    res.json({
        imageUrl,
        filename: req.file.filename,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
