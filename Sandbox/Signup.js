const express = require("express");
const router = express.Router();
const { json } = require("sequelize")
const {sequelize} = require("../backend/src/models")


router.get("/", (req, res) => {
    res.send("signing up...")
})

module.exports = router
