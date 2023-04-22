const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  console.log('registered')
  console.log(req.body)
  const user = await User.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(user)
}

// const login = async (req, res) => {
//   const user = await User.
// }

module.exports = {
  register
}