const config = require("config");
const debug = require("debug")("app:startup");
const mongoose = require("mongoose");

module.exports = () => {
  const database = config.get("database");
  mongoose
    .connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => debug("Connected to MongoDB..."));
  // Dont need to catch -> terminate the process
  // .catch((err) => debug(`Cannot connect to MongoDB with err ${err.message}`));
};
