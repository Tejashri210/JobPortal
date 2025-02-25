const mongoose = require('mongoose');
const dotenv = require("dotenv")
require("dotenv").config();
dotenv.config();
dotenv.config({
  path: "./config/.env"
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
};

module.exports = connectDB;