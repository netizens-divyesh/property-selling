const express = require("express");
const router = express.Router();

const { getSettings, updateSettings } = require("../controllers/settingsController");

router.get("/", getSettings);
router.post("/", updateSettings);
router.put("/", updateSettings);

module.exports = router;
