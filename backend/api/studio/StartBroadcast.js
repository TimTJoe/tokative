const express = require("express");
const { v4: uuidv4 } = require("uuid");

const StartBroadcast = (req, res) => {
  const roomId = uuidv4();
  res.send({ room: roomId });
};

module.exports = StartBroadcast