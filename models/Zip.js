const mongoose = require('mongoose')
const zips = require('../graphs/zipCodeGraph')


const ZipSchema = new mongoose.Schema({
  zipCode:{
    type:String, 
    // Fix unique validation issue
    unique: true,
    required:[true, 'Zip code is required.'],
    enums: Object.keys(zips),
  },
  cafes:{
    // Array of Cafe objects
    type:Object,
    default: []
  },
  // Create list of users in each zip
  // Use GraphQL???
  // users:{
  //   type: mongoose.Schema.Types.Array, ref: 'User'
  // }
})


module.exports = mongoose.model('Zip', ZipSchema);