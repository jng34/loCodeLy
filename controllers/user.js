const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  res.status(StatusCodes.CREATED).json({user})
}

// const login = async (req, res) => {
//   const user = await User.
// }

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.status(StatusCodes.OK).json(users)
}

const updateUser = async (req, res) => {
  const {
    params: { id: userId },
    body: { email, zipCode, bio, techStack }
  } = req

  if (!req.body.zipCode) throw new Error('No cafes provided');

  const user = await user.findByIdAndUpdate(
    userId,
    req.body,
    { new: true, runValidators: true }
  )
  res.status(StatusCodes.OK).json(user);
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id)
  if (!user) throw new Error(`No user with ${id} found.`)
  res.status(StatusCodes.OK).send('Deleted')
}

module.exports = {
  register,
  getAllUsers,
  updateUser,
  deleteUser
}