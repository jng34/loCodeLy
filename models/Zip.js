const mongoose = require('mongoose')
const zips = require('../graphs/zipCodeGraph')

const ZipSchema = new mongoose.Schema({
  zipCode:{
    type:Number, 
    enums: Object.keys(zips),
    required:true
  },
  cafes:{
    type:[String],
    default: undefined
  }
})


module.exports = mongoose.model('Zip', ZipSchema);