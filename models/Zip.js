const mongoose = require('mongoose')
const zips = require('../graphs/zipCodeGraph')


const ZipSchema = new mongoose.Schema({
  zipCode:{
    type:String, 
    unique: true,
    required:true,
    enums: Object.keys(zips),
  },
  cafes:{
    type:Object,
    default: []
  }
})


module.exports = mongoose.model('Zip', ZipSchema);