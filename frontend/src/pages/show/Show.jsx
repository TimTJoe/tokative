import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Listeners from './components/Listeners'
import Footer from "./components/Footer"
import Navigation from '@components/navigation'
import MuiContainer from "@mui/material/Container"
import styled from 'styled-components'
import { useLocation, useSearchParams } from "react-router-dom"
import withShow from '@contexts/withShow'
import {ReactMic} from "react-mic"
import AudioPlayer from './components/AudioPlayer'
import { IconButton } from "@mui/material"
import Button from './components/Button'
import { Close } from '@mui/icons-material'
import Snackbar from './components/Snackbar'
import { Phone } from "@mui/icons-material"
import useUser from "@hooks/useUser"

const Main = styled.main`
background-color: white;
`
const Container = styled(MuiContainer)`
  && {
    position: relative;
    margin-top: 12px;
    min-height: 90vh;
  }
  `

const Show = (props) => {
  //VARIABLES/STATE VARIABLES
  const location = useLocation()
  let [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("r");

  const { 
    user,
    show,
    ShowStatus,
    setRoom,
    room,
    JoinRoom,
    RoomJoined,
  } = useContext(withShow)
  
  useEffect(() => {
    setRoom(token)
  }, [token])
  
  useEffect(() => {
    JoinRoom()
    RoomJoined()
  }, [room])

  return (
    <Main>
      <Navigation />
      <Container maxWidth="sm" disableGutters>
        <Header />
        <Body />
        <Listeners />
      </Container>
      <Footer socket={props.socket} />
    </Main>
  )
}

export default Show