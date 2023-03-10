let constraints = { audio: true };

navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {

    let mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.onstart = function (e) { this.chunks = []; };
    mediaRecorder.ondataavailable = function (e) { this.chunks.push(e.data); };

    mediaRecorder.onstop = function (e) {
        let blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' });
        radio.emit('voice', blob);
    };

    // Start recording
    mediaRecorder.start();

    // Stop recording after 5 seconds and broadcast it to server
    setInterval(function () {
        mediaRecorder.stop()
        mediaRecorder.start()
    }, 5000);
});

// When the client receives a voice message it will play the sound
radio.on('voice', function (arrayBuffer) {
    var blob = new Blob([arrayBuffer], { 'type': 'audio/ogg; codecs=opus' });
    var audio = document.createElement('audio');
    audio.src = window.URL.createObjectURL(blob);
    audio.play();
});