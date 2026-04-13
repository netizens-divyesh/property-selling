const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Log warnings if MongoDB disconnects in the background
    mongoose.connection.on('disconnected', () => {
      console.log('⚠️  MongoDB disconnected! Check your network or IP whitelist.');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB Connection Error:', err.message);
    });
    
    mongoose.connection.on('connected', () => {
      console.log('✅ MongoDB Connected successfully via Mongoose! 🚀');
    });

    // Connect with a 5-second timeout (fails fast instead of waiting 30s)
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    
    // Disable buffering - throws an error immediately if DB drops instead of hanging the API
    mongoose.set('bufferCommands', false);
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
