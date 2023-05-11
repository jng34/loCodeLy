const express = require("express");
const router = express.Router();
const {
  register, 
  getAllUsers, 
  updateUser, 
  deleteUser
} = require('../controllers/user');


router.post("/register", register);
router.route("/").get(getAllUsers);
router.route("/:id").patch(updateUser).delete(deleteUser);


module.exports = router;
