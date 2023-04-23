const mongoose = require('mongoose')

const ZipSchema = new mongoose.Schema({
  zipCode:{
    type:Number, 
    required:[true, 'Please provide a 5 digit number']
  },
  cafes:{
    type:[String],
    default: undefined
  }
})


module.exports = mongoose.model('Zip', ZipSchema);