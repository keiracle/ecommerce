const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const categorySchema = new mongoose.Schema({
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

const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
  const schema = Joi.object({
    name: Joi.string()
      .required()
      .min(2)
      .max(10)
  });

  return schema.validate(category);
}

// (async function createCategory() {
//   const category = new Category({
//     name: "Shoes"
//   });

//   const result = await category.save();
//   console.log(result);
// })();

exports.categorySchema = categorySchema;
exports.validateCategory = validateCategory;
exports.Category = Category;
