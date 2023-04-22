const mongoose = require('mongoose')

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
  }, 
  bio:{
    type:String,
    minLength:10,
    maxLength:300
  },
  techStack:{
    type:String,
    max:300
  }
})




module.exports = mongoose.model('User', UserSchema);