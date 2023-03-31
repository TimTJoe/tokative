const express = require("express");
const router = express.Router();
const { sequelize, User, Station, Show } = require("../../db/models");

const AllShows = async (req, res, next) => {
  try {
    const shows = await Show.findAll();
    res.send(shows);
  } catch (error) {
    res.send(error);
  }
};

module.exports = AllShows;
