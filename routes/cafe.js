const express = require('express');
const router = express.Router();
const { getAllCafes, createCafe, deleteCafe } = require('../controllers/cafe')

router.route('/').get(getAllCafes).post(createCafe);
router.route("/:id").delete(deleteCafe);

module.exports = router


