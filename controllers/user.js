const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  console.log(req.body)
  const user = await User.create({ ...req.body })
  res.status(StatusCodes.CREATED).json({user})
}

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.status(StatusCodes.OK).json(users)
}
// const login = async (req, res) => {
//   const user = await User.
// }

module.exports = {
  register,
  getAllUsers
}