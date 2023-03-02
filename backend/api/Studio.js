const express = require("express");
const router = express.Router();

const EndBroadcast = require("./studio/EndBroadcast")
const StartBroadcast = require("./studio/StartBroadcast")


router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /studio"
    });
});

module.exports = router;
