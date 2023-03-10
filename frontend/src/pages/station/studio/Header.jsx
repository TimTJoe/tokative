import { Box, Typography, Tooltip } from '@mui/material'
import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import { Stop, PlayArrow } from '@mui/icons-material'
import withBroadcast from '@contexts/withBroadcast'
const Container = styled(Box)`
    && {
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        gap: 12px;
        align-items: center;
    }
`

const Icon = styled.img`
    border-radius: 50%;
    border: thin black;
    width: 56px;
    height: 56px;
    background-color: black;
    object-fit: cover;
`

const Textbox = styled(Box)`
    && {
        border: thin black;
        flex: 2;
        display: flex;
        flex-direction: column;
    }
`

const LargeText = styled(Typography)`
    && {
    font-size: large ;
    font-weight: 900;
    }
`
const SmallText = styled(Typography)`
    && {
        font-size: small;
        color: grey;
    }
`

const VideoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: 300px;
`
const Video = styled.video`
    width: 100%;
    height: 300%;
    object-fit: cover;
`

function Header(props) {
    const station = useLocation().state.station
    const [ripple, setRipple] = useState(false)
    const { room } = useContext(withBroadcast)
    // console.log(room)

    return (
            <Container>
                <Icon src="https://i.imgur.com/4Z5YQ2x.png" />
                <Textbox>
                    <LargeText>{station.name} &bull; {station.frequency}</LargeText>
                    <SmallText> 0 listeners </SmallText>
                </Textbox>
                <Tooltip title={ ripple ? "Stop Broadcast" : "Start Broadcast"}>
                    <Button onClick={() => setRipple(!ripple)}
                        color={ripple ? "error" : "primary"}
                        className={ripple ? 'ripple' : ""}>
                        {ripple ? <Stop /> : <PlayArrow />}
                    </Button>
                </Tooltip>
            </Container>
    )
}

export default Header