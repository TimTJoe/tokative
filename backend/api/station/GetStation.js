const express = require("express");
const router = express.Router();
const { sequelize, User, Station } = require("../../db/models");

const GetStation = (req, res, next) => {
    /**
     * get the user uuid
     * get the station created by the user
     * send the station
     */
    try {
        user_uuid = req.user.uuid;
        const result = Station.findOne({ where: { user_uuid }, include: [User] });
        if (!result) {
            throw { message: "User don't have a station"}
        }
        res.send({
            station: result
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = GetStation