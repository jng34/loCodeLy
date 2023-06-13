const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')


const register = async (req, res) => {
  console.log(req.body)
  const user = await User.create({...req.body});
  const token = user.createJWT();
  res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 3 * 1000 });
  res.status(StatusCodes.CREATED).json({ userId: user._id, token });
}

const login = async (req, res) => { 
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
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
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ userName: user.name, token })
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