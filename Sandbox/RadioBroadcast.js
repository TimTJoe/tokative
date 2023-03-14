const express = require("express");
const { v4: uuidv4 } = require("uuid");

const RadioBroadcast = (socket) => {
    console.log(`User from studio conntected: ${socket.id}`)
    socket.on("join-room", )
};

module.exports = RadioBroadcast