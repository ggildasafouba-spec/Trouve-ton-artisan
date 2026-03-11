const express = require("express");
const router = express.Router();
const { getCategories } = require("../config/controllers/categoryController");

router.get("/", getCategories);

module.exports = router;