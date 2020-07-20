// All the library for production goes here
const helmet = require("helmet");
const compression = require("compression");

module.exports = (app) => {
  app.use(helmet());
  app.use(compression());
};
