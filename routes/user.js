const express = require("express");
const router = express.Router();
const {register, getAllUsers, deleteUser} = require('../controllers/user');


router.get("/all", getAllUsers).post("/register", register);
router.delete("/:id", deleteUser);


module.exports = router;
