const express = require("express");
const router = express.Router();
const { sequelize, User, Station } = require("../../db/models");

const GetStation = async (req, res, next) => {
  /**
   * get the user uuid
   * get the station created by the user
   * send the station
   */
  try {
      const user_uuid = req.params.uuid;
    const station = await Station.findOne({ where: { user_uuid } });
    if (!station) {
      throw {
        success: false,
        message: "User does not have a station",
      };
    }
    console.log(station)
    res.send(station);
  } catch (error) {
    res.send(error);
  }
};

module.exports = GetStation;
