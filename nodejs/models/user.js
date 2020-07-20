const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { orderSchema } = require("./order");
const { roleSchema } = require("./role");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 12,
  },
  address: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
  role: {
    type: roleSchema,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  // Auto default empty array
  wishList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  // This cart dont need alone Schema
  cart: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1, required: true },
    },
  ],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      // role: this.role,
      //! All user is admin
      isAdmin: true,
    },
    config.get("privatekey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().required().min(2).max(50),
    lastName: Joi.string().required().min(2).max(50),
    email: Joi.string().email().required().min(5).max(50),
    password: Joi.string().required().min(5).max(50), //Password the user send to server (will hash in the future)
    phone: Joi.string().required().min(5).max(12),
    gender: Joi.string().required().min(4).max(6),
    address: Joi.string().min(5).max(255),
  });

  return schema.validate(user);
}

function validateUserUpdateProfile(user) {
  const schema = Joi.object({
    firstName: Joi.string().required().min(2).max(50),
    lastName: Joi.string().required().min(2).max(50),
    phone: Joi.string().required().min(5).max(12),
    gender: Joi.string().required().min(4).max(6),
    address: Joi.string().min(5).max(255),
  });

  return schema.validate(user);
}

exports.validateUser = validateUser;
exports.validateUserUpdateProfile = validateUserUpdateProfile;
exports.User = User;
