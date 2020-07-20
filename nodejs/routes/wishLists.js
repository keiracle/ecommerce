const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { User } = require("../models/user");
const { Product } = require("../models/product");
const _ = require("lodash");

// Dont have get all wishlist
// router.get("/", auth, (req, res) => {});

// Get wishlist of user
router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate({
      path: "wishList"
    })
    .select("wishList");

  const wishList = user.wishList;

  res.send(wishList);
});

// Add or remove wishlist
router.put("/:id", auth, async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid object id");
  }

  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send("Product with given id not found!");

  let user = await User.findById(req.user._id);

  // Check if product exist in wishlist
  const index = user.wishList.indexOf(product._id);
  if (index === -1) {
    user.wishList.push(product._id);
  } else {
    user.wishList.splice(index, 1);
  }
  user = await user.save();

  // Return full populate wishlist
  user = await User.findById(req.user._id)
    .populate({ path: "wishList" })
    .select("wishList");

  const wishList = user.wishList;

  res.send(wishList);
});

module.exports = router;
