const debug = require("debug")("app:startup");
const config = require("config");

module.exports = () => {
  //Configuration
  debug(`Application name: ${config.get("name")}`);

  if (!config.get("privatekey")) {
    debug("FATAL ERROR: privatekey is not defined");
    // process.exit(1);
    throw new Error("FATAL ERROR: privatekey is not defined");
  }
};
