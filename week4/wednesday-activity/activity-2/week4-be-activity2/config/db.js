const mongoose = require("mongoose");

/* 
 * Recommendation
 * Prevent Redundant Connections : leads application constantly trying to establish new connections, 
 * wasting resources or causing errors.
 * Best practice to use environment variables
 * Improved error logis (e.g console.error(error))
*/
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/web-dev");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
 