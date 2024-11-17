const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./utils/db");
const { validateAuth } = require("./utils/validate-auth");

// routes imports
const authRoutes = require("./routes/auth");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
    credentials: true,
  }),
);

app.get("/", validateAuth, (req, res) => {
  return res.json({ message: "hello world" });
});

app.use(express.json());

app.use(cookieParser());

app.use("/auth", authRoutes);
connectToDatabase();

module.exports = app;
