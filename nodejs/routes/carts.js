const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { User } = require("../models/user");
const { Product } = require("../models/product");
const _ = require("lodash");
const { validateCartItem, CartItem } = require("../models/cartItem");

// Get cart of user
router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate({
      path: "cart.product",
    })
    .select("-password");

  const cart = user.cart;

  res.send(cart);
});

// Add item to cart
router.put("/", auth, async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  if (!mongoose.Types.ObjectId.isValid(req.body.product)) {
    return res.status(400).send("Invalid object id");
  }

  const product = await Product.findById(req.body.product);
  if (!product) return res.status(404).send("Product with given id not found!");

  if (product.quantityInStock < req.body.quantity)
    return res
      .status(400)
      .send(`You can only buy ${product.quantityInStock} items`);

  let user = await User.findById(req.user._id).select("cart");

  // Check if cart already have that product
  let isInCart = false;
  user.cart.forEach((i) => {
    if (i.product.toString() === req.body.product) isInCart = true;
  });

  if (isInCart) {
    await User.findOneAndUpdate(
      { _id: req.user._id, "cart.product": req.body.product },
      {
        $set: { "cart.$.quantity": req.body.quantity },
      },
      {
        new: true,
      }
    );
  } else {
    user.cart.push({ product: product._id });
    await user.save();
  }

  user = await User.findById(req.user._id)
    .populate({
      path: "cart.product",
    })
    .select("cart");
  const cart = user.cart;
  res.send(cart);
});

// Delete 1 item from cart
router.delete("/:id", auth, async (req, res) => {
  let user = await User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    {
      $pull: {
        cart: { product: { _id: req.params.id } },
      },
    },
    {
      new: true,
    }
  );

  user = await User.findById(req.user._id)
    .populate({
      path: "cart.product",
    })
    .select("cart");
  const cart = user.cart;
  res.send(cart);
});

// Delete all item in cart
router.delete("/", auth, async (req, res) => {
  // let user = await User.findById(req.user._id).select("cart");
  // user.cart = [];
  // user = await user.save();
  // res.send(user.cart);

  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { cart: [] } },
    { new: true }
  );
  res.send(user.cart);
});

module.exports = router;

// Lessons
// $set like this make _id of product change
// User.updateOne(
//   { _id: req.user._id, cart: { _id: req.body.id } },
//   {
//      $set: { "cart.$": { _id: req.body.id, quantity: 101 }
//   }
// );

// User.updateOne(
//     { _id: req.user._id, "cart._id": req.body.id },
//     {
//       $inc: { "cart.$.quantity": 1 }
//     }
//   );
