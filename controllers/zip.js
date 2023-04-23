const Zip = require('../models/Zip')
const { StatusCodes } = require('http-status-codes')


const getAllZips = async (req, res) => {
  const zips = await Zip.find({})
  res.status(StatusCodes.OK).json({ zips })

}

const getZip = async (req, res) => {
  const zip = await Zip.findOne({ /** zipCode or id */ })
  res.status(StatusCodes.OK).json({ zip })
}

const createZip = async (req, res) => {
  console.log(req.body)
  const zip = await Zip.create({ ...req.body });
  res.status(StatusCodes.CREATED).json(zip);
}

module.exports = {
  getAllZips,
  getZip,
  createZip
}