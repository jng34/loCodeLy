const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator");
const zips = require('../graphs/zipCodeGraph')


const ZipSchema = new mongoose.Schema({
  zipCode:{
    type:String, 
    unique: true,
    required:[true, 'Zip code is required.'],
    enums: Object.keys(zips),
  }
})

ZipSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique. {VALUE} already exists.' });


module.exports = mongoose.model('Zip', ZipSchema);