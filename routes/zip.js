const express = require('express');
const router = express.Router();
const { getAllZips, getZip, createZip, deleteZip } = require('../controllers/zip');

router.route('/').get(getAllZips).post(createZip)
router.route('/:id').get(getZip).delete(deleteZip)

module.exports = router;