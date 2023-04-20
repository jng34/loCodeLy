const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minLength:1,
    maxLength:30
  },
  zipCode:{
    type:Number,
    required:true,
    min:5,
    max:5
  }
})


module.exports = UserSchema;