const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User } = require("../../src/models");
const bcrypt = require("bcryptjs")

router.get("/", (req, res) => {
  res.send("SIGNING UP...");
});

//CREATE NEW USER
router.post("/", (req, res) => {
  const { fullname, email, gender, password } = req.body;
  //CHECK IF USER EXIST
  User.findOne({ where: { email } }).then((user) => {
    if (user) res.send({
      success: false,
      name: "email",
      message: "Email already exists"
    });
    else {
      const newUser = new User({
        fullname: fullname,
        email: email,
        gender: gender,
        password: password,
      });
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          //CREATE NEW USER
          newUser.save().then((user) => res.send({
            success: true,
            message: "Account created successfully.",
            user: user,
          }));
        })
      );
    }
  });
});

module.exports = router;
