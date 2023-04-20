const mongoose = require('mongoose')
const zips = require('../graphs/zipCodeGraph')

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minLength:1,
    maxLength:30
  },
  email: { 
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  zipCode:{ 
    type:Number,
    required:true,
    // enums: Object.keys(zips),
    // default: 10001,
    min:5,
    max:5
  }

  // Add short bio, tech stack
  
})




module.exports = UserSchema;