const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io");

const CreateShow = require("./show/CreateShow");
const GetShow = require("./show/GetShow");
const AllShows = require("./show/AllShows");
const GetShowHost = require("./show/GetShowHost");

//GET REQUEST HANDLERS
router.get("/", AllShows);
router.get("/:token", GetShow);
router.get("/host/:uuid", GetShowHost);


//POST REQUEST HANDLERS
router.post("/", CreateShow);

module.exports = router;
