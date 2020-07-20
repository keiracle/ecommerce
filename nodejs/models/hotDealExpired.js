const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const hotDealExpiredSchema = mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  endDate: {
    type: Date,
    required: true,
    default: Date.now(),
    validate: {
      validator: function(v) {
        return v >= this.startDate;
      },
      message: "End date must later than start date"
    }
  }
});

const HotDealExpired = mongoose.model("HotDealExpired", hotDealExpiredSchema);

function validateHotDealExpired(hotDealExpired) {
  const schema = Joi.object({
    startDate: Joi.date().required(),
    endDate: Joi.date().required()
  });

  return schema.validate(hotDealExpired);
}

exports.HotDealExpired = HotDealExpired;
exports.validateHotDealExpired = validateHotDealExpired;
exports.hotDealExpiredSchema = hotDealExpiredSchema;
