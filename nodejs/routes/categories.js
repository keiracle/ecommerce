const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { Category } = require("../models/category");

// Get all category
router.get("/", async (req, res) => {
  const categories = await Category.find().sort("name");
  res.send(categories);
});

async function create(name) {
  const newCategory = new Category({ name });
  await newCategory.save();
}

// create("shoes");

module.exports = router;
