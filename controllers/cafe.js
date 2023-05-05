const Cafe = require('../models/Cafe');
const { StatusCodes } = require("http-status-codes");

const getAllCafes = async (req, res) => {
  const cafes = await Cafe.find({});
  res.status(StatusCodes.OK).json({cafes});
}

const createCafe = async (req, res) => {
  const cafe = await Cafe.create({ ...req.body });
  res.status(StatusCodes.CREATED).json(cafe);
}

const updateCafe = async (req, res) => {
  const cafe = await Cafe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true, context: 'query' }
  )
  console.log(req.body)
  res.status(StatusCodes.OK).json(cafe);
}

const deleteCafe = async (req, res) => {
  const { id } = req.params;
  const cafe = await Cafe.findByIdAndDelete(id);
  if (!cafe) throw new Error(`No cafe with ${id} found.`);
  res.status(StatusCodes.OK).send("Deleted cafe.");
}

module.exports = {
  getAllCafes,
  createCafe,
  updateCafe,
  deleteCafe
}