import React, { createContext, useEffect, useRef, useState } from 'react'
import useShow from '@hooks/useShow'
import useUser from '@hooks/useUser'
import useRole from "@hooks/useRole"
import useHost from "@hooks/useHost"
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client"
import Peer from "simple-peer"
const socket = io.connect('http://localhost:8020')

export const withShow = createContext(null)

export function ProvideShow({ children }) {

    const location = useLocation()
    const [showName, setShowName] = useState("")
    const [aboutShow, setAboutShow] = useState("")
    const role = useRole()
    const show = useShow()
    const user = useUser()
    const hostName = useHost()

    //SOCKET PROPS
    const [stream, setStream] = useState(null)
    const [me, setMe] = useState("")
    const [call, setCall] = useState({})
    const [callAccepted, setCallAccepted] = useState(false)
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState("")

    //REFERENCE
    // const hostAudio = useRef();
    // const guestAudio = useRef()
    // const connectionRef = useRef()


    useEffect(() => {
        setShowName(show.name)
        setAboutShow(show.about)
    }, [show, location])

    const myAudio = useRef()
    const userAudio = useRef()
    const connectionRef = useRef()
    //function to make video chat work
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            setStream(stream)
            myAudio.current.srcObject = stream
        })
        socket.on("me", (id) => {
            //set the host id
            setMe(id)
        })
        //user request to join the talkshow
        socket.on("callUser", ({ from, name: callerName, signal }) => {
            setCall({ isReceivingCall: true, from, name: callerName, signal })
        })
    }, [])
    //add user to talkshow
    const answerCall = () => {
        setCallAccepted(true)
        const peer = new Peer({ initiator: false, trickle: false, stream })
        peer.on("signal", data => {
            //accepting user to talkshow
            socket.emit("answerCall", { signal: data, to: call.from })
        })
        peer.on("stream", stream => {
            userAudio.current.srcObject = stream
        })
        peer.signal(call.signal)
        connectionRef.current = peer;
    }
    //user joining the talkshow
    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream })
        peer.on("signal", data => {
            socket.emit("callUser", { userToCall: id, signalData: data, from: me, name })
        })
        peer.on("stream", stream => {
            userAudio.current.srcObject = stream
        })
        socket.on("callAccepted", signal => {
            setCallAccepted(true)
            peer.signal(signal)
        })
        connectionRef.current = peer;
    }
    const leaveCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy()
        window.location.reload()
    }


    const VALUES = {
        role,
        hostName,
        showName,
        aboutShow,
        call,
        callAccepted,
        myAudio,
        userAudio,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
    }
    return (
        <withShow.Provider value={VALUES}>
            {children}
        </withShow.Provider>
    )
}

export default withShow