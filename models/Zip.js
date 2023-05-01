const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator");
const zips = require('../graphs/zipCodeGraph')


const ZipSchema = new mongoose.Schema({
  zipCode:{
    type:String, 
    // Fix unique validation issue
    unique: true,
    required:[true, 'Zip code is required.'],
    enums: Object.keys(zips),
  },
  
  // Might not need this if GraphQL queries do the job!
  cafes:{
    type:Object,
    default: []
  },
  // Create list of users in each zip
  // Use GraphQL???
  // users:{
  //   type: mongoose.Schema.Types.Array, ref: 'User'
  // }
})

ZipSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique. {VALUE} already exists.' });


module.exports = mongoose.model('Zip', ZipSchema);