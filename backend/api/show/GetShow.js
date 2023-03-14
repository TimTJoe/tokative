const express = require("express");
const router = express.Router();
const { sequelize, User, Station, Show } = require("../../db/models");

const GetShow = async (req, res, next) => {
  const token = req.params.token
  try {
    const show = await Show.findOne({where: {token}});
    res.send(show);
  } catch (error) {
    res.send(error);
  }
};

module.exports = GetShow;
