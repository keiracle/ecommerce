const express = require("express");
const cors = require("cors");
const brands = require("../routes/brands");
const categories = require("../routes/categories");
const products = require("../routes/products");
const orders = require("../routes/orders");
const users = require("../routes/users");
const wishList = require("../routes/wishLists");
const cart = require("../routes/carts");
const roles = require("../routes/roles");
const auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = (app) => {
  // app.use(express.json());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(cors({ origin: "*" }));
  app.use("/api/brands", brands);
  app.use("/api/categories", categories);
  app.use("/api/products", products);
  app.use("/api/orders", orders);
  app.use("/api/users", users);
  app.use("/api/wishList", wishList);
  app.use("/api/cart", cart);
  app.use("/api/roles", roles);
  app.use("/api/auth", auth);
  app.use(error);
};
