const express = require("express");
const router = express.Router();
const { sequelize, User, Station } = require("../../db/models");

const GetUser = async (req, res, next) => {
  try {
    const { uuid } = req.user;
    const user = await User.findOne({ where: { uuid } });
    res.send(user)
  } catch (error) {
    res.send(error)
  }
}


module.exports = GetUser;
