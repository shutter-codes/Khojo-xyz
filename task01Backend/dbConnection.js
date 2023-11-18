const mongoose = require('mongoose');
const dbConnection = mongoose
const env = require("dotenv").config();
  mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("db connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));


  module.exports = dbConnection;