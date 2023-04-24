const mongoose = require('mongoose')
const zips = require('../graphs/zipCodeGraph')

const ZipSchema = new mongoose.Schema({
  zipCode:{
    type:String, 
    enums: Object.keys(zips),
    unique: true,
    required:true
  },
  cafes:{
    type:Object,
    default: {}
  }
})


module.exports = mongoose.model('Zip', ZipSchema);