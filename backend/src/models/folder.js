const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parentId: { type: String },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Folder", folderSchema);
