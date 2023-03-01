import React, { useState } from 'react'
import useStation from '@hooks/useStation'
import useTitle from '@hooks/useTitle'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import useData from "@hooks/useData"
import useRole from "@hooks/useRole"
import styled from 'styled-components'
import { Box, Button } from '@mui/material'
import { Stop, PlayArrow } from '@mui/icons-material'
import Header from "./studio/Header"
import "./studio/Studio.css"
import Body from './studio/Body'

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

function Studio() {
  const frequency = useParams().frequency
  const [start, setStart] = useState(false)
  const handleStart = () => {
    setStart(!start)
  }
    // const station = useStation()
    const user = useData()
    const station = useLocation().state.station
    const role = useRole()
  useTitle(`Studio - ${station?.name}`)
  

  return (
    <Container>
      <Header />
      <Body />
      <Button onClick={handleStart} className={ start ? 'ripple' : null}>
        {start ? <Stop /> : <PlayArrow />}
      </Button>
    </Container>
  )
}

export default Studio