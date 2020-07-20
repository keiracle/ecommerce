// const logger = require("../startup/logging");
const { loggers } = require("winston");

module.exports = function (err, req, res, next) {
  loggers.get("logger").error({
    message: err.message,
    metadata: err,
  });
  //error
  //warn
  //info
  //verbose
  //silly

  res.status(500).send("Something failed!.");
};
