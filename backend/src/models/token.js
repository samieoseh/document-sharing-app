const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  token: { type: String, required: true },
  type: { type: String, enum: ["access", "refresh"], required: true },
  expiresAt: { type: Date, required: true },
});

tokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // Auto-remove expired tokens

module.exports = mongoose.model("Token", tokenSchema);
