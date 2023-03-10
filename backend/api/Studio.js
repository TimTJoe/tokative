const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io");

const EndBroadcast = require("./studio/EndBroadcast");
const StartBroadcast = require("./studio/StartBroadcast");

/**
 * @todo
 * host start room from client
 * listener request to join
 * start the room stream
 * host stop session
 * session stop for a listener
 */
router.get("/", (req, res) => {
  const roomId = uuidv4();
  res.send({ 
    name: "room",
    id: roomId,
   });
});


module.exports = router;
