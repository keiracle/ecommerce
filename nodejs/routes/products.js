const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Product, validateProduct } = require("../models/product");
const { validateBrand } = require("../models/brand");
const { validateCategory } = require("../models/category");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

router.get("/", async (req, res) => {
  const products = await Product.find().sort("name");
  res.send(products);
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).send("The product with the given ID not found!");

    res.send(product);
  } catch (ex) {
    next(ex);
  }
});

// router.post("/", auth, async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(404).send(error.details[0].message);

//   const product = new Product({
//     name: req.body.name,
//     detail: req.body.detail,
//     brand: req.body.brand,
//     category: req.body.category,
//     image: req.body.image,
//     isPublished: req.body.isPublished,
//     quantityInStock: req.body.quantityInStock,
//     price: req.body.price,
//     salePrice: req.body.salePrice,
//     hotDealExpired: req.body.hotDealExpired,
//     quantityForDeal: req.body.quantityForDeal,
//     quantityDealSold: req.body.quantityDealSold,
//     hotDealPrice: req.body.hotDealPrice
//   });
//   // await product.save();

//   res.send(product);
// });

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: null,
  limits: { fileSize: 1000000 },
}).single("myImage");

router.post("/", [auth, upload], async (req, res) => {
  req.body = JSON.parse(req.body.data);

  const { error: productError } = validateProduct(req.body);
  if (productError)
    return res.status(404).send(productError.details[0].message);

  const { error: brandError } = validateBrand(req.body.brand);
  if (brandError) return res.status(404).send(brandError.details[0].message);

  const { error: categoryError } = validateCategory(req.body.category);
  if (categoryError)
    return res.status(404).send(categoryError.details[0].message);

  if (!req.file) return res.status(404).send("Missing image of product");

  const product = new Product({
    name: req.body.name,
    detail: req.body.detail,
    brand: req.body.brand,
    category: req.body.category,
    image: { data: req.file.buffer, contentType: "image/png" },
    isPublished: req.body.isPublished,
    quantityInStock: req.body.quantityInStock,
    price: req.body.price,
    salePrice: req.body.salePrice,
    hotDealExpired: req.body.hotDealExpired,
    quantityForDeal: req.body.quantityForDeal,
    quantityDealSold: req.body.quantityDealSold,
    hotDealPrice: req.body.hotDealPrice,
  });
  await product.save();

  res.send(product);
});

//Query first
// router.put("/:id", async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   if (!product)
//     return res.status(404).send("The product with the given ID not found!");

//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   product.name = req.body.name;
//   res.send(product);
// });

//Update first
router.put("/:id", [auth, upload], async (req, res) => {
  req.body = JSON.parse(req.body.data);

  const { error: productError } = validateProduct(req.body);
  if (productError)
    return res.status(404).send(productError.details[0].message);

  const { error: brandError } = validateBrand(req.body.brand);
  if (brandError) return res.status(404).send(brandError.details[0].message);

  const { error: categoryError } = validateCategory(req.body.category);
  if (categoryError)
    return res.status(404).send(categoryError.details[0].message);

  let spreadProduct = { ...req.body };
  if (req.file) {
    spreadProduct = {
      ...req.body,
      image: { data: req.file.buffer, contentType: "image/png" },
    };
  }
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    spreadProduct,
    {
      new: true,
    }
  );

  if (!product)
    return res.status(404).send("The product with the given ID not found!");
  res.send(product);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);

  if (!product)
    return res.status(404).send("The product with the given ID not found");

  res.send(product);
});

module.exports = router;
