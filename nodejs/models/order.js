const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { orderDetailSchema } = require("./orderDetail");

const orderSchema = new mongoose.Schema({
  issueDate: {
    type: Date,
    default: Date.now
  },
  isDelivery: {
    type: Boolean,
    default: false
  },
  deliveryDate: {
    type: Date,
    required: function() {
      return this.isDelivery;
    }
  },
  orderDetails: {
    type: [orderDetailSchema]
  }
});

const Order = mongoose.model("Order", orderSchema);

function validateOrder(order) {
  const schema = Joi.object({
    orderDetails: Joi.array().required()
  });

  return schema.validate(order);
}

exports.Order = Order;
exports.orderSchema = orderSchema;
exports.validateOrder = validateOrder;
