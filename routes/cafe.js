const express = require('express');
const router = express.Router();
const { createCafe } = require('../controllers/cafe')

router.post('/', createCafe);

module.exports = router


