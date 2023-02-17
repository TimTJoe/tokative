const express = require("express");
const router = express.Router();
const { json } = require("sequelize");
const { sequelize } = require("../../src/models");
const {genUUID} = require("../../utils/genUUID")

router.get("/", (req, res) => {
  res.send("SIGNING UP...");
});

router.post("/", (req, res) => {
    alert(JSON.stringify(req.body))
    // res.json({})
})

module.exports = router;
