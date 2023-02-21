const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User } = require("../../src/models");

router.get("/", (req, res) => {
  res.send("SIGNING UP...");
});

//CREATE NEW USER
router.post("/", async (req, res) => {
  const {fullname, email, gender, password} = req.body;
  try {
    const user = await User.create({
      fullname,
      email,
      gender,
      password
    });
    res.status(200).json({
      user: user,
      success: true,
    });
    
  } catch (error) {
    res.status(400).json({
      error: error,
      success: false
    });
  }
});

router.post("/login", async (req, res) => { 

})

module.exports = router;
