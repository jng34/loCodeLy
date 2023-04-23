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
    type:String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  zipCode:{ 
    type:String,
    required:true,
    enum: Object.keys(zips)
  }, 
  bio:{
    type:String,
    minLength:[10, "Please write a bit more. You're more interesting than that."],
    maxLength:300,
    default: 'coder'
  },
  techStack:{
    type:String,
    maxLength:300,
  }
})




module.exports = mongoose.model('User', UserSchema);