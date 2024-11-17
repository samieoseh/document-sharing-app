const mongoose = require("mongoose");

function connectToDatabase() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4,
      })
      .then(async () => {
        console.log("Connected to MongoDB");
        resolve();
      })
      .catch((error) => {
        console.error("Failed to connect to MongoDB:", error.message);
        reject();
      });
  });
}

module.exports = { connectToDatabase };
