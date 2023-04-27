const Cafe = require('../models/Cafe')
const { StatusCodes } = require("http-status-codes");

const getAllCafes = async (req, res) => {
  const cafes = await Cafe.find({})
  res.status(StatusCodes.OK).json(cafes)
}

const createCafe = async (req, res) => {
  console.log(req.body)
  const cafe = await Cafe.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(cafe)
}

const deleteCafe = async (req, res) => {
  const { id } = req.params
  const cafe = await Cafe.findByIdAndDelete(id)
  if (!cafe) throw new Error(`No cafe with ${id} found.`)
  res.status(StatusCodes.OK).send("Cafe deleted.")
}

module.exports = {
  getAllCafes,
  createCafe,
  deleteCafe
}