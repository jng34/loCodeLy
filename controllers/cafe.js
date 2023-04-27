const Cafe = require('../models/Cafe')
const { StatusCodes } = require("http-status-codes");

const createCafe = async (req, res) => {
  console.log(req.body)
  const cafe = await Cafe.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(cafe)
}

module.exports = {
  createCafe
}