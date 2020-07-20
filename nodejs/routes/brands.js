const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { Brand } = require("../models/brand");

// Get all brand
router.get("/", async (req, res) => {
  const brands = await Brand.find().sort("name");
  res.send(brands);
});

module.exports = router;
