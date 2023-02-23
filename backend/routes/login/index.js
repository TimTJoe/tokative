const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User } = require("../../src/models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("LOGIN IN...");
});

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

module.exports = router;
