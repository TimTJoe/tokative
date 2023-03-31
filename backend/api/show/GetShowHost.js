const express = require("express");
const router = express.Router();
const { sequelize, User, Station, Show } = require("../../db/models");

const GetShowHost = async (req, res, next) => {
  const uuid = req.params.uuid
  try {
    const host = await User.findOne({where: {uuid}});
    res.send(host);
  } catch (error) {
    res.send(error);
  }
};

module.exports = GetShowHost;
