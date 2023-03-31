useEffect(() => {

    navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(stream => {
            setStream(stream)
            // setStart(true)
        }
        ).catch(
            setStart(false)
        )
    return () => { }
}, [location])

const handleStart = () => { }

function JoinRoom(token) {
    socket.emit("join_room", { roomId: token })
}

function StartShow() {

    const peer = new Peer({ initiator: true, trickle: true, stream })

    peer.on("signal", data => {
        socket.emit("start_show", data)
    })

    peer.on("stream", stream => {
        userVideo.current.srcObject = stream
    })

    socket.on("show_started", data => {
        console.log("Start show: " + JSON.stringify(data))
        peer.signal(data)
    })
    connection.current = peer
    alert("Show started!")
}

socket.on("start_show", data => {
    console.log(JSON.stringify(data))
})