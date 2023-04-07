import React from "react";

function StartStreaming(socket) {
  let time = 200;
  navigator.mediaDevices.getUserMedia({ audio: true }).then((mediaStream) => {
    let mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.start();
    let audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", (e) => {
      audioChunks.push(e.data);
    });
    mediaRecorder.addEventListener("stop", (e) => {
      let audioBlob = new Blob(audioChunks, {
        type: "audio/ogg; codecs=opus",
      });
      audioChunks = [];
      socket.emit("stream", audioBlob);
      mediaRecorder.start();
      setTimeout(function () {
        mediaRecorder.stop();
      }, time);
    }); //on stop ends
    setTimeout(function () {
      mediaRecorder.stop();
    }, time);
  });
}

export default StartStreaming;
