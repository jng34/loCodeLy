const express = require('express');
const router = express.Router();
const { getAllZips, getZip, createZip } = require('../controllers/zip');

router.route('/').get(getAllZips).post(createZip)

module.exports = router;