const participants = {};
let numClients = {};

const Showroom = (socket) => {
  console.log(`Socket connected: ${socket.id}`);
  let room;
  socket.on("Join_Room", (data) => {
    socket.join(data.Room);
    room = data.Room;
    console.log("Joined Room #: " + data.Room);

    socket.room = data.Room;
    if (numClients[socket.room] == undefined) {
      numClients[socket.room] = 1;
    } else {
      numClients[socket.room]++;
    }
    socket.emit("Room_Joined", {
      numParticipants: numClients,
      User: data.User,
    });
  });

  socket.on("Go_Live", (data) => {
    socket.broadcast.to(socket.room).emit("Go_Live", data);
  });

  socket.on("stream", (audio) => {
    socket.broadcast.to(socket.room).emit("stream", audio);
  });

  socket.on("play", (data) => {
    socket.emit("play", data);
  });
  // socket.on("stop", (msg) => {socket.emit("stop");});

  socket.on("disconnect", () => {
    numClients[socket.room]--;
  });
};

module.exports = Showroom;
