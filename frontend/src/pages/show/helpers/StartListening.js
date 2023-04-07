import React from "react";

function StartListening(socket, audioCtx) {
//   const AudioContext = useAudioContext();
  socket.on(
    "audio",
    function (arrayBuffer) {
      AudioContext.decodeAudioData(arrayBuffer, (buffer) => {
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start();
      });
    },
    (err) => {
      console.log("Error: " + err);
    }
  );
}

export default StartListening;
