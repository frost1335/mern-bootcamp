const mongoose = require("mongoose");

const connString = process.env.DATABASE_CONNECTION;

const connectDB = async () => {
  try {
    await mongoose.connect(connString);

    console.log("MongoDB connection Success 👏");
  } catch (error) {
    console.log("MongoDB connection Failed 💥");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
