const express = require("express");
const router = express.Router();
const {
  getTopArtisans,
  getArtisans,
  getArtisanById
} = require("../config/controllers/artisanController");

router.get("/top", getTopArtisans);
router.get("/", getArtisans);
router.get("/:id", getArtisanById);

module.exports = router;