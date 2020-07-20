const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

function validateCartItem(cartItem) {
  const schema = Joi.object({
    product: Joi.string().required(),
    quantity: Joi.number()
      .required()
      .min(0)
      .max(100)
  });

  return schema.validate(cartItem);
}

exports.validateCartItem = validateCartItem;
exports.CartItem = CartItem;
exports.cartItemSchema = cartItemSchema;
