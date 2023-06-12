const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uniqueValidator = require('mongoose-unique-validator')
const zips = require('../graphs/zipCodeGraph')

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required: [true, 'Name is required'],
    minLength:1,
    maxLength:30
  },
  email: { 
    type:String,
    required: [true, 'Email is required'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password of min length 6 is required'],
    minlength: 6,
  },
  zipCode:{ 
    type:String,
    required: [true, 'Invalid zip code. Please enter a valid one.'],
    enum: Object.keys(zips),
  },
  bio:{
    type:String,
    minLength: [10, "Min length is 10 words."],
    maxLength: [300, "Max length is 300 words."]
    // default: 'coder',
  },
  techStack:{
    type:String,
    required: [true, "Please indicate your tech stack."],
    maxLength: [300, "Max length is 300 words."],
    // default: '',
  }
})

UserSchema.plugin(uniqueValidator, { message: 'Error, {PATH} {VALUE} is already taken' })

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name }, // Payload
    process.env.JWT_SECRET, // Secret
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  )
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}


module.exports = mongoose.model('User', UserSchema);