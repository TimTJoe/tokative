const express = require("express");
const router = express.Router();
const { sequelize, User, Station } = require("../../db/models");

const AllStations = async (req, res, next) => {
  //GET ALL STATIONS
    
  try {
    const stations = await Station.findAll();
    if (!stations) {
      throw {
        success: false,
        message: "No station exist",
      };
    }
    res.send(stations);
  } catch (error) {
    res.send(error);
  }
};

module.exports = AllStations;
