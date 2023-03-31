const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User } = require("../db/models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("LOGIN IN...");
});

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user)
      res.send({
        isAuth: false,
        name: info.name,
        message: info.message,
        user: null,
      });
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send({
          isAuth: true,
          user: req.user,
        });
        console.log(req.user);
      });
    }
  })(req, res, next);
});

module.exports = router;
