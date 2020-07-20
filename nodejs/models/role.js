const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    // unique: true,  // Mongodb dont allow multiple user have same role if role is unique
    trim: true,
    minlength: 2,
    maxlength: 20,
    uppercase: true
  }
});

const Role = mongoose.model("Role", roleSchema);

function validateRole(role) {
  const schema = Joi.object({
    name: Joi.string()
      .required(true)
      .min(2)
      .max(20)
  });

  return schema.validate(role);
}

async function createRole(role) {
  await role.save();
}

// createRole(new Role({ name: "CUSTOMER" }));

exports.roleSchema = roleSchema;
exports.Role = Role;
exports.validateRole = validateRole;
