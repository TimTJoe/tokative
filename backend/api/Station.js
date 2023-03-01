const express = require("express");
const router = express.Router();

//HANDLERS
const CreateStation = require("./station/CreateStation")
const GetStation = require("./station/GetStation")
const AllStations = require("./station/AllStations")

router.get("/", AllStations);
// router.get("/:user_uuid", GetStation);
router.post("/", CreateStation)

module.exports = router;
