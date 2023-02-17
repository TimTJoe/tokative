const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User } = require("../../src/models");
const {genUUID} = require("../../utils/genUUID")
import uuid from "uuid";

router.get("/", (req, res) => {
  res.send("SIGNING UP...");
});

router.post("/", async (req, res) => {
  const {fullname, email, gender, password} = req.body;
  try {
    const user = await User.create({ fullname, email, gender, password });
    res.status(200).json({ success: true, user: user, message: "User created"});
  } catch (error) {
    res.status(400).json({ success: false, error: error, message: "User not created"});
  }
});

module.exports = router;
