const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./utils/db");

// routes imports
const authRoutes = require("./routes/auth");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/auth", authRoutes);
connectToDatabase();

module.exports = app;
