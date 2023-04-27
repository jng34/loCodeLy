const mongoose = require("mongoose");


const CafeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name code is required."],
  },
  address: {
    type: String,
    required: [true, "Address code is required."],
  },
  url: {
    type: String,
    required: [true, "URL is required."],
  },
});


module.exports = mongoose.model("Cafe", CafeSchema);
