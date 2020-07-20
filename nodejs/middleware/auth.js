const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models/user");

module.exports = async function(req, res, next) {
  const token = req.header("x-auth-token");
  //Return cause wanna make sure exit from function
  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    const decoded = jwt.verify(token, config.get("privatekey"));
    req.user = decoded;

    // Check user exist
    const user = await User.findById(req.user._id).select("name");
    // Valid token but user already deleted
    if (!user) return res.status(404).send("Invalid token");
    next();
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
};
