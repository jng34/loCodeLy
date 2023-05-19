const express = require('express');
const router = express.Router();
const { getAllCafes, createCafe, updateCafe, deleteCafe } = require('../controllers/cafe')

router.route('/').get(getAllCafes).post(createCafe);
router.route('/:id').patch(updateCafe).delete(deleteCafe);

module.exports = router;


