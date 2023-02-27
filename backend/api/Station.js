const express = require("express");
const router = express.Router();

//HANDLERS
const CreateStation = require("./station/CreateStation")

router.get("/", (req, res) => {
  res.send("Hello World. It works!");
});

router.post("/", CreateStation)

module.exports = router;
