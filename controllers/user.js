const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  console.log(req.body)
  const user = await User.create({ ... req.body })
  res.status(StatusCodes.CREATED).json({ name: user.name, zip: user.zipCode })
}

// const login = async (req, res) => {
//   const user = await User.
// }

module.exports = {
  register
}