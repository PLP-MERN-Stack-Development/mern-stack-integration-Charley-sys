const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const equipmentRoutes = require("./routes/equipmentRoutes");
const errorHandler = require("./middleware/errorHandler");

// ✅ Load environment variables
dotenv.config();

// ✅ Connect to MongoDB
connectDB();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"], // allow frontend during dev
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(morgan("dev"));

// ✅ Routes
app.get("/", (req, res) => {
  res.send("🩺 Medical Equipment Management API is running...");
});

app.use("/api/equipments", equipmentRoutes);

// ✅ Error handler (should come after routes)
app.use(errorHandler);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
