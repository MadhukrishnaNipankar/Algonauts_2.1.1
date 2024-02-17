// **********************User***********************

const express = require("express");

// Router Import
const router = express.Router();

// Controller Imports
const {
  protect,
} = require("../Controllers/UserControllers/UserAuthController");
const {
  updateUserProfile,
  viewUserProfile,
} = require("../Controllers/UserControllers/UserProfileController");

// Account Updation
router.patch("/", protect, updateUserProfile);

// View Profile
router.get("/", protect, viewUserProfile);

module.exports = router;
