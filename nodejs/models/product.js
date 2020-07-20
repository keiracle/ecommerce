const fs = require("fs");
const util = require("util");
const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { brandSchema, Brand } = require("./brand");
const { categorySchema, Category } = require("./category");
const { hotDealExpiredSchema, HotDealExpired } = require("./hotDealExpired");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30,
      trim: true
    },
    detail: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      trim: true
    },
    brand: {
      type: brandSchema,
      required: true
    },
    category: {
      type: categorySchema,
      required: true
    },
    // brand: {
    //   type: Array,
    //   validate: {
    //     validator: function(v) {
    //       return v && v.length > 0;
    //     },
    //     message: "A product should have atleast 1 brand"
    //   },
    //   set: brands => brands.map(brand => brand.trim()),
    //   get: brands => brands.map(brand => brand.trim())
    // },
    image: {
      data: Buffer,
      contentType: String
    },
    isPublished: {
      type: Boolean,
      default: false,
      required: true
    },
    quantityInStock: {
      type: Number,
      default: 0,
      min: 0,
      required: true,
      get: v => Math.round(v),
      set: v => Math.round(v)
    },
    price: {
      type: Number,
      min: 0,
      max: 2000,
      required: function() {
        return this.isPublished;
      },
      set: v => Math.round(v),
      get: v => Math.round(v)
    },
    salePrice: {
      type: Number,
      min: 0,
      max: 2000,
      default: 0,
      required: function() {
        return this.isPublished;
      },
      validate: [
        {
          validator: function(v) {
            return v <= this.price;
          },
          message: "Sale price must lower or equal price"
        }
      ],
      set: v => Math.round(v),
      get: v => Math.round(v)
    },
    hotDealExpired: {
      type: hotDealExpiredSchema,
      required: function() {
        return this.isPublished;
      },
      default: {}
    },
    quantityForDeal: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      // Validate become error when not in hot deal
      // validate: [
      //   {
      //     validator: function(v) {
      //       return v - this.quantityDealSold <= this.quantityInStock;
      //     },
      //     message:
      //       "QuantityForDeal - QuantityDealSold must be lower or equal quantity in stock"
      //   }
      // ],
      set: v => Math.round(v),
      get: v => Math.round(v)
    },
    quantityDealSold: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      validate: [
        {
          validator: function(v) {
            return v <= this.quantityForDeal;
          },
          message: "Quantity deal sold must be lower or equal quantity for deal"
        }
      ],
      set: v => Math.round(v),
      get: v => Math.round(v)
    },
    hotDealPrice: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      required: function() {
        return this.isPublished;
      },
      validate: [
        {
          validator: function(v) {
            return v <= this.price;
          },
          message: "Hot deal price must be lower or equal price"
        }
      ],
      set: v => Math.round(v),
      get: v => Math.round(v)
    }
  })
);

function validateProduct(product) {
  const schema = Joi.object({
    // id:Joi.objectId(),
    name: Joi.string()
      .min(3)
      .required(),
    detail: Joi.string()
      .min(5)
      .required(),
    brand: Joi.object().required(),
    category: Joi.object().required(),
    isPublished: Joi.required(),
    price: Joi.number()
      .min(0)
      .required(),
    salePrice: Joi.number().min(0),
    hotDealExpired: Joi.object(),
    hotDealPrice: Joi.number().min(0),
    quantityForDeal: Joi.number().min(0),
    quantityInStock: Joi.number().min(0)
  });

  return schema.validate(product);
}

exports.Product = Product;
exports.validateProduct = validateProduct;

async function createProduct(brand, category, hotDealExpired) {
  const product = new Product({
    name: "NODE TEST",
    detail: "For boyz only",
    brand,
    category,
    image: {},
    isPublished: true,
    price: 60,
    salePrice: 50,
    hotDealExpired,
    quantityInStock: 20,
    quantityForDeal: 10,
    quantityDealSold: Math.random(3),
    hotDealPrice: 10
  });

  // product.image.data = fs.readFileSync("./uploads/image1.png");
  // const result = await product.save();

  // fs.readFile("./uploads/image1.png", async (err, data) => {
  //   if (err) {
  //     product.image.data = "";
  //     return console.log(err);
  //   }
  //   product.image.data = data;
  //   product.image.contentType = "image/png";
  //   const result = await product.save();
  //   console.log(result);
  // });
  product.image.data = await util.promisify(fs.readFile)(
    "./uploads/image1.png"
  );
  console.log(product.image.data);
  product.image.contentType = "image/png";
  const result = await product.save();
  console.log(result);
}

async function findProductById(productId) {
  const product = await Product.findById(productId);
  console.log(product);
}

// for (let index = 0; index < 1; index++) {
//   createProduct(
//     new Brand({ name: "nike" }),
//     new Category({ name: "shoes" }),
//     new HotDealExpired({
//       startDate: Date.now(),
//       endDate: new Date(2020, 5, Math.random() * (20 - 6) + 6, 3, 29, 0, 0)
//     })
//   );
// }
