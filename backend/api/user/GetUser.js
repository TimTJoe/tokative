const express = require("express");
const router = express.Router();
const { sequelize, User, Station } = require("../../db/models");


  /**
   * Get user uuid
   * fetch user with the uuid from db
   * get the user station
   * send the data to the clien
   */
const GetUser = async (req, res, next) => {
  try {
    const { uuid } = req.user;
    const user = await User.findOne({ where: { uuid } });
    if (!user) {
      throw {
        success: false,
        message: "User not found"
      }
    }
    const station = await Station.findOne({ where: { user_uuid: uuid } });
    if (!station) {
      throw {
        success: false,
        message: "User does not have a station"
      }
    }
    res.send({
      success: true,
      user,
      station
    })
    console.log(user, station)
    
  } catch (error) {
    res.send(error)
  }
}


module.exports = GetUser;
