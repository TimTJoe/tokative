const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize, User, Station } = require("../../src/models");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.send("CREATING STATION...");
});

//CREATE NEW STATION
router.post("/", async (req, res) => {
  const { name, frequency, bio, owner } = req.body;

    try {
      //check if frequency is taken
        const isFrequencyTaken = await Station.findOne({ where: { frequency } });
        if (isFrequencyTaken) {
            res.status(401).json({
                success: false,
                name: "frequency",
                message: "Frequency is taken"
            })
        }

        //add station to db
        const newStation = await Station.create({ name, frequency, bio, owner });
        res.status(200).json({
            success: true,
            message: "Station created.",
            station: newStation
        })

  } catch (error) {
        res.status(501).json({
        success: false,
      error: error,
    });
  }
});

module.exports = router;
