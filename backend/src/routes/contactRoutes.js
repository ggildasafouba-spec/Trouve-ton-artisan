const express = require("express");
const router = express.Router();

const {
  contactValidation,
  sendContact,
} = require("../config/controllers/contactController");

router.post("/", contactValidation, sendContact);

module.exports = router;