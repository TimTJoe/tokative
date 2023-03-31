  // socket.emit("user_info", userStatus)

  function mainFunction(time) {
    let audioContext;
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      window.alert("Web Audio API is not supported.")
    } 
    const oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.start()

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start()
        
        let audioChunks = []

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data)
        });

        mediaRecorder.addEventListener("stop", (event) => {
          let audioBlob = new Blob(audioChunks, { type: "audio/ogg; codecs=opus" });

          audioChunks = []

          let fileReader = new FileReader()
          fileReader.readAsArrayBuffer(audioBlob);
          fileReader.onloadend = function () {
              let resultBlob = fileReader.result;
              socket.emit("send", resultBlob)
          }
          mediaRecorder.start()

          setTimeout(function () {
            mediaRecorder.stop()
          }, time)
        });//stop event ends

        setTimeout(function () {
          mediaRecorder.stop()
        }, time)

      });//then callback ends
    
    socket.on("receive", function (blobArr) {
      let blob = new Blob([blobArr], { 'type': 'audio/ogg; codecs=opus' });
      // console.log(blob)
      console.log("Received!")
    })
    

      const userStatus = {
    microphone: false,
    mute: false,
    username: "user#" + Math.floor(Math.random() * 999999),
    online: false,
  };
  }
