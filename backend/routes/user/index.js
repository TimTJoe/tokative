const express = require("express");
const { where } = require("sequelize");
const router = express.Router();
const { sequelize, User } = require("../../src/models");

router.get("/", (req, res) => {
  res.send("USER ROUTE");
});

//GET USER BY ID
router.get("/:uuid", async (req, res) => {
    const { uuid } = req.params;
    const user = await User.findOne({ where: { uuid: uuid } });
    if (!user) {
      res.status(404).send("User not found");
    }
    res.send(user);
});

module.exports = router;
