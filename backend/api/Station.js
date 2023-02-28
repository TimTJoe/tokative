const express = require("express");
const router = express.Router();

//HANDLERS
const CreateStation = require("./station/CreateStation")
const GetStation = require("./station/GetStation")

router.get("/", GetStation);
router.post("/", CreateStation)

module.exports = router;
