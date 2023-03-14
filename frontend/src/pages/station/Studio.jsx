import React, { useState, useContext, useEffect, useRef } from 'react'
import useStation from '@hooks/useStation'
import useTitle from '@hooks/useTitle'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import useData from "@hooks/useData"
import useRole from "@hooks/useRole"
import styled from 'styled-components'
import { Box } from '@mui/material'
import Header from "./studio/Header"
import "./studio/Studio.css"
import Body from './studio/Body'
import axios from "axios"
import { ProvideBroadcast } from '@contexts/withBroadcast'
import io from 'socket.io-client'
//create a new distinct websocket connection
const socket = io.connect('http://localhost:8020', { path: "/studio", })
import { ReactMic } from 'react-mic';
import useRoom from "@hooks/useRoom"
import Peer from "simple-peer"
const Container = styled(Box)`
    && {
        padding: 12px;
        box-sizing: border-box;
        width: calc(400px + 48px);
        margin: auto;
        overflow: hidden;
        background-color: #F2F2F2;
        border-radius: 12px;
    }
`
const audio = new Audio()

function Studio() {
  // const room = useRoom()
  //TODO: SOLVE STATION ISSUES
  const station = useLocation().state?.station || ""
  useTitle(`Studio - ${station?.name}`)
  const frequency = useParams().frequency
  const [start, setStart] = useState(false)
  const [record, setRecord] = useState(false)
  const [playing, setPlaying] = useState("")
  const [room, setRoom] = useState("")
  const location = useLocation()
  const user = useData()
  const role = useRole()

  const handleStart = () => { setStart(!start) }
  const handlePlay = (src) => { audio.play() }
  const handleRecord = () => { setRecord(!record) }
  const onData = (blob) => { console.log('Real-time data: ', blob); }
  const onStop = (blob) => { console.log('recorded blob is: ', blob); }

  useEffect(() => {
    setRoom(frequency)
    socket.emit('join_room', { roomId: frequency, signal: "data"})
    return () => { }
  }, [location])


  return (
    <ProvideBroadcast>
      <Container>
        You are in Room {room} as {role}
        <Header />
        <Body />
        {/* <ReactMic
        record={record}
        onStop={onStop}
        onData={onData}
        strokeColor="#000"
        backgroundColor="#ff4081"
        /> */}

      </Container>

    </ProvideBroadcast>
  )
}

export default Studio