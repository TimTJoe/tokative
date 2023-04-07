import React, { createContext, useEffect, useState, useRef, useContext } from 'react'
import useShow from '@hooks/useShow'
import useUser from '@hooks/useUser'
import useRole from "@hooks/useRole"
import useHost from "@hooks/useHost"
import { useLocation, useSearchParams } from 'react-router-dom';
import withSocket from "@contexts/withSocket"

// import { io } from "socket.io-client"
// const socket = io("http://localhost:8020")
const AudioContext = window.AudioContext || window.webkitAudioContext;
export const AudioCtxt = new AudioContext();

//FIXME: REMOVE
const audioFile = "test.mp3"

export const withShow = createContext(null)
export function ProvideShow({ children }) {

    const { socket } = useContext(withSocket)

    const location = useLocation()
    const [room, setRoom] = useState("")
    const [showName, setShowName] = useState("")
    const [aboutShow, setAboutShow] = useState("")
    const [participant, setParticipant] = useState({})
    const [numParticipants, setnumParticipants] = useState("")
    const [userRole, setUserRole] = useState("")
    const [playing, setPlaying] = useState("")
    const [live, setLive] = useState(false)
    const [stream, setStream] = useState(null)
    const [calling, setCalling] = useState(false)
    const role = useRole()
    const show = useShow()
    const user = useUser()
    const hostName = useHost()
    const connection = useRef()
    const hostVideo = useRef()
    const myAudio = useRef()

    const UserStatus = {
        microphone: false,
        mute: false,
        online: false,
        user: user,
    }
    const ShowStatus = {
        live: false,
        participant: participant
    }

    //HANDLERS
    const handleMicrophone = () => { UserStatus.microphone = !UserStatus.microphone; UpdateStatus() }
    const handleMute = () => { UserStatus.mute = !UserStatus.mute; UpdateStatus() }
    const handleOnline = () => { UserStatus.online = !UserStatus.online; UpdateStatus() }
    const handleCalling = () => { setCalling(true) }

    //EMITER FOR SOCKET.IO
    const UpdateStatus = () => { socket.emit("Status", UserStatus) }
    const JoinRoom = () => { socket.emit("Join_Room", { Room: room, User: user }) }
    const RoomJoined = () => {
        socket.on("Room_Joined", data => {
            setParticipant(data.User)
            setnumParticipants(data.numParticipants[room])
            console.log("Number of Participant: " + numParticipants)
        })
    }
    const GoLive = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            socket.emit("Go_Live", { Room: room, User: user, Stream: stream })
            setLive(true)
        })
    }


    const GetStream = () => { }

    useEffect(() => {
        setShowName(show.name)
        setAboutShow(show.about)
    }, [show, location])

    if (live) {
        // socket.on("Go_Live", data => {
        //     setStream(data.Stream)
        // })
        console.log("Show is live!")
    }

    useEffect(() => {
        function PlayAudio(a) {
            console.log("audio: " + a)
            if (userRole === "client") {
                myAudio.current.src = a.path
                myAudio.current.play()
            }
            setPlaying(a.name)
        }

        socket.on("play", PlayAudio)

        return () => { socket.off("play") }
    }, [userRole])


    function handlePlaySound() {
        socket.emit("play", { name: "Test Sound", path: audioFile })
    }

    function handleUserRole(v) {
        setUserRole(v)
    }




    const VALUES = {
        role,
        hostName,
        showName,
        aboutShow,
        stream,
        UserStatus,
        AudioCtxt,
        user,
        show,
        ShowStatus,
        room,
        numParticipants,
        hostVideo,
        myAudio,
        playing,
        userRole,
        calling,
        handleUserRole,
        handlePlaySound,
        setRoom,
        JoinRoom,
        RoomJoined,
        handleMicrophone,
        handleMute,
        handleOnline,
        GoLive,
        GetStream,
        handleCalling,
    }
    return (
        <withShow.Provider value={VALUES}>
            {children}
        </withShow.Provider>
    )
}

export default withShow