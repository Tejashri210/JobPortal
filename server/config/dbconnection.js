const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/job-portal', {
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