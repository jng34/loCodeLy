const Zip = require('../models/Zip')
const { StatusCodes } = require('http-status-codes')


const getAllZips = async (req, res) => {
  const zips = await Zip.find({})
  res.status(StatusCodes.OK).json({ zips })

}

const getZip = async (req, res) => {
  const {id} = req.params;
  const zip = await Zip.findById(id);
  res.status(StatusCodes.OK).json(zip)
}

const createZip = async (req, res) => {
  const zip = await Zip.create({ ...req.body });
  res.status(StatusCodes.CREATED).json(zip);
}

// const updateZip = async (req, res) => {
//   const zip = await Zip.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true, runValidators: true, context: "query" }
//   );

//   res.status(StatusCodes.OK).json(zip);
// }

const deleteZip = async (req, res) => {
  const { id } = req.params;
  const user = await Zip.findByIdAndDelete(id);
  if (!user) throw new Error(`No user with ${id} found.`);
  res.status(StatusCodes.OK).send("Deleted zip.");
}

module.exports = {
  getAllZips,
  getZip,
  createZip,
  deleteZip
}