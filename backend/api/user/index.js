const express = require("express");
const { where } = require("sequelize");
const router = express.Router();
const { sequelize, User } = require("../src/models");

router.get("/", (req, res) => {
  res.send(req.user);
});

module.exports = router;
