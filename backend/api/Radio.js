const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Broadcast = require("./Radio/Broadcast")

const Radio = (socket) => {
    console.log(`Connected: ${socket.id}`);

    socket.on("join_room", data => {
        socket.join(data.roomId);
        console.log("Joined Room " + data.roomId);
        console.log(JSON.stringify(data.signal))
    })

};

module.exports = Radio;
