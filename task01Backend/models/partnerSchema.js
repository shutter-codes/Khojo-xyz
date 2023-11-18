const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    partnerName: {
        type: String,
        required: true,
       
      },
      desc: {
        type: String,
        required: true,
      },
      experience: {
        type: Number,
        required: true,
      },
})


const Partner = mongoose.model("Partner", partnerSchema);
module.exports = Partner;