const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const zips = require('../graphs/zipCodeGraph')

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required: [true, 'Name is required.'],
    minLength:1,
    maxLength:30
  },
  email: { 
    type:String,
    required: [true, 'Email is required'],
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
    default: ''
  },
  //Add zipId for graphQL -> query zipCode and list of cafes
  // zipId:{ 
  //   type:String,
  //   default: 0
  // }

})

UserSchema.plugin(uniqueValidator, { message: 'Error, {PATH} {VALUE} is already taken.' })


module.exports = mongoose.model('User', UserSchema);