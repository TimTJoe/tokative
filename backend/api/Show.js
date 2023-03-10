const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io");

const CreateShow = require("./show/CreateShow");

router.get("/", (req, res, next) => {
    res.send("Shows loading...")
});

router.post("/", CreateShow);

module.exports = router;
