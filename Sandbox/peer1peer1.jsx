
peer1.on('signal', data => {
    peer2.signal(data)
    console.log("Peer1 Signal: " + JSON.stringify(data))
})
peer2.on('signal', data => {
    peer1.signal(data)
    console.log("Peer2 Signal: " + JSON.stringify(data))
})
peer1.on("connect", () => {
    peer2.send("Hey peer2, how is it going?")
})
peer2.on("data", (data) => {
    console.log("go a message from peer1 " + data)
})