const mongoose = require('mongoose')

const ZipSchema = new mongoose.Schema({
  zipCode:{
    type:Number, 
    required:[true, 'Please provide a 5 digit number']
  },
  cafes:{
    type:Object,
    default:[]
  }
})

module.exports = ZipSchema;