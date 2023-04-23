const express = require("express");
const router = express.Router();
const {register, getAllUsers} = require('../controllers/user');


router.get("/all", getAllUsers).post("/register", register);


module.exports = router;
