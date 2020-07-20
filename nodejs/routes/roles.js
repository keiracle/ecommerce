const express = require("express");
const router = express.Router();
const { Role, validateRole } = require("../models/role");

router.get("/", async (req, res) => {
  const roles = await Role.find().sort("name");
  res.send(roles);
});

router.post("/", async (req, res) => {
  const { error } = validateRole(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const role = new Role({
    name: req.body.name
  });
  await role.save();

  res.send(role);
});

module.exports = router;
