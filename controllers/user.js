const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')


const register = async (req, res) => {
  console.log(req.body)
  const user = await User.create({...req.body});
  const token = user.createJWT();
  res.cookie('jwt', token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
  res.status(StatusCodes.CREATED).json({ 
    name: user.name,
    email: user.email,
    zipCode: user.zipCode,
    techStack: user.techStack,
    bio: user.bio, 
    token, 
  });
}

const login = async (req, res, next) => { 
  const { email, password } = req.body;

  if (!email) {
    throw new BadRequestError('Please enter an email');
  }

  if (!password) {
    throw new BadRequestError('Please enter a password');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError('Invalid email');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid password');
  }

  //compare password
  const token = user.createJWT();
  res.cookie('jwt', token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
  res.status(StatusCodes.OK).json({ 
    name: user.name,
    email: user.email,
    zipCode: user.zipCode,
    techStack: user.techStack,
    bio: user.bio, 
    token, 
  })
}


const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.status(StatusCodes.OK).json({users})
}

const updateUser = async (req, res) => { 
  // revisit for possible error handling 
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true, context: 'query' }
  )
  res.status(StatusCodes.OK).json(user);
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id)
  if (!user) throw new Error(`No user with ${id} found`)
  res.status(StatusCodes.OK).send('Deleted user')
}

module.exports = {
  register,
  login,
  getAllUsers,
  updateUser,
  deleteUser
}