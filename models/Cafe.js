const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const CafeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  address: {
    type: String,
    unique: true,
    required: [true, "Address is required."],
  },
  url: {
    type: String,
    unique: true,
    required: [true, "URL is required."],
  },
  zipCode: {
    type: String,
    required: [true, "Zip code is required."]
  }
});

CafeSchema.plugin(uniqueValidator, { message: 'Error, expect {PATH} to be unique. {VALUE} is taken already.' })

module.exports = mongoose.model("Cafe", CafeSchema);
