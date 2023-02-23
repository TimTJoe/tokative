const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User } = require("../../src/models");

router.get("/", (req, res) => {
  res.send("SIGNING UP...");
});

//CREATE NEW USER
router.post("/", (req, res) => {
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (user) res.send({ message: "Email already exists" });
    else {
      const newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => res.send(user));
        })
      );
    }
  });
});

router.post("/login", async (req, res) => {});

module.exports = router;
