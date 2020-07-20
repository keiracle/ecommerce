const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
    lowercase: true,
    minlength: 2,
    maxlength: 10
  }
});

const Brand = mongoose.model("Brand", brandSchema);

function validateBrand(brand) {
  const schema = Joi.object({
    name: Joi.string()
      .required()
      .min(2)
      .max(10)
  });

  return schema.validate(brand);
}

// (async function createBrand() {
//   const brand = new Brand({
//     name: "balanciaga"
//   });

//   const result = await brand.save();
//   console.log(result);
// })();

exports.brandSchema = brandSchema;
exports.validateBrand = validateBrand;
exports.Brand = Brand;
