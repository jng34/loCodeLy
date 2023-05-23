const express = require("express");
const router = express.Router();
const {
  register, 
  getAllUsers, 
  updateUser, 
  deleteUser,
  login
} = require('../controllers/user');


router.post("/register", register);
router.post("/login", login);
router.route("/").get(getAllUsers);
router.route("/:id").patch(updateUser).delete(deleteUser);


module.exports = router;
