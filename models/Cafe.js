const mongoose = require("mongoose");


const CafeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name is required."],
  },
  address: {
    type: String,
    required: [true, "Address is required."],
  },
  url: {
    type: String,
    required: [true, "URL is required."],
  },
  zipCode: {
    type: String,
    required: [true, "Zip code is required."]
  }
});


module.exports = mongoose.model("Cafe", CafeSchema);
