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
    if (user === null) {
      //CHECK PASSWORD
      //TODO: TEST EACH LINE
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) {
          throw {
            error: true,
            msg: "Password is incorrect",
            isAuth: false,
          };
        }
        res.status(200).json({
          user: user,
          isAuth: true,
        });
      });
    } else {
      res.status(400).json({
        error: true,
        msg: "Account doesn't exist",
        isAuth: false,
      });
    }
  } catch (error) {
    res.status(501).json(error);
  }
});

module.exports = router;
