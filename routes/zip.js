const express = require('express');
const router = express.Router();
const { getAllZips, getZip } = require('../controllers/zip');

router.get('/', getAllZips);

module.exports = router;