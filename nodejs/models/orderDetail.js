const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const orderDetailSchema = new mongoose.Schema({
  product: new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      max: 2000,
      get: v => Math.round(v),
      set: v => Math.round(v)
    }
  }),
  quantity: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  }
});

const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);

function validateOrderDetail(orderDetail) {
  const schema = Joi.object({
    productId: Joi.objectId().required(),
    quantity: Joi.number()
      .strict()
      .required()
      .min(0)
      .max(100)
  });

  return schema.validate(orderDetail);
}

exports.validateOrderDetail = validateOrderDetail;
exports.orderDetailSchema = orderDetailSchema;
exports.OrderDetail = OrderDetail;
