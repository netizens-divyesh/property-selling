const express = require("express");
const router = express.Router();

const {
  getAllusersList,
  createUser,
  updateUser,
  deleteUser,
} = require("@controllers/userController");

router.put("/:id", updateUser);
// @route   GET /api/users
router.get("/", getAllusersList);

// @route   POST /api/users
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
