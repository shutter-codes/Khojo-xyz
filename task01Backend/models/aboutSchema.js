const mongoose = require("mongoose");
const aboutSchema = new mongoose.Schema({
  content: String,
});

const About = mongoose.model("About", aboutSchema);

module.exports = About;
