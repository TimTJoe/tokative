const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User } = require("../../src/models");
const bcrypt = require("bcryptjs");
const Passport = require("passport");

router.get("/", (req, res) => {
  res.send("LOGIN IN...");
});

//LOGIN ROUTE
router.post("/", async (req, res, next) => {
  //AUTHENTICATE USER
  Passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    } //else ends
  });//passport auth ends
  next();//next middleware
});

module.exports = router;
