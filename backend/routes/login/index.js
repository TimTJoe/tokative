const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User } = require("../../src/models");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.send("LOGIN IN...");
});

//CREATE NEW USER
router.post("/", async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ where: { email } });

    //check if user exists
    if (user === null) {
      res.json({
        error: true,
        isAuth: false,
      });
    }

    //CHECK PASSWORD
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        res.json({
          user,
          isAuth: result, //true
        });
        // req.session.user = user;
      } else {
        res.json({
          error: err,
          isAuth: result //false,
        });
      }
    }); //bcrypt.compare ends

  } catch (error) {
    res.status(501).json({
      error: error,
      isAuth: false,
    });
  }
});

module.exports = router;
