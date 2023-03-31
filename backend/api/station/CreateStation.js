const express = require("express");
const router = express.Router();
const { sequelize, User, Station } = require("../../db/models");

/**
 * check if user already have a station
 * check if station frequency is taken
 * create new station
 * return station
 */
const CreateStation = async (req, res, next) => {
  try {
    const { station, frequency, about } = req.body;
    const user_uuid = req.user.uuid;
    const hasStation = await Station.findOne({ where: { user_uuid } });
    //Does user have a station
    if (hasStation) {
      throw {
        created: false,
        name: "user",
        message: "User already have a Station",
      };
    }
    //is frequency taken
    const hasFrequency = await Station.findOne({
      where: { frequency },
      //return only the id & frequency columns
      attributes: ["id", "frequency"],
    });
    if (hasFrequency) {
      throw {
        success: false,
        name: "frequency",
        message: "Frequency is taken. Try another one.",
      };
    }
    const newStation = await Station.create({
      user_uuid,
      name: station,
      frequency,
      about,
    });
    if (newStation) {
      res.send({
        success: true,
        message: "Station created successfully",
        station: newStation,
      });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = CreateStation;
