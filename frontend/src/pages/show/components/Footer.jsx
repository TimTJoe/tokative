import React, { useContext, useState, useRef, useEffect } from 'react'
import { Typography, IconButton, Stack, Slider } from '@mui/material'
import styled from 'styled-components'
import Button from './Button'
import withShow from "@contexts/withShow"
import useRole from '@hooks/useRole'
import useAudioContext from '@hooks/useAudioContext'
import withSocket from "@contexts/withSocket";
import isHost from '@helpers/isHost'
import { Phone, Pause, PlayArrow, VolumeDown, VolumeUp, RadioButtonCheckedRounded, RadioRounded, PhoneAndroid } from "@mui/icons-material"
import StartStreaming from '../helpers/StartStreaming'
import StartListening from '../helpers/StartListening'

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 12px;
    background-color: white;
    border-top: 1px solid #e0e0e0;
`

const Text = styled(Typography)`
    && {

    }
`

const Block = styled.div``
const MuiIconButton = styled(IconButton)`
    && {
        background-color: #d9d9d9;
        svg {
            color: black;
        }
    }
`
const SliderBox = styled(Stack)`
    && {
        gap: 4px;
        flex-direction: row;
        align-items: center;
        width: 250px;
    }
`

const MuiSlider = styled(Slider)`
    && {
        color: #d9d9d9;
        .MuiSlider-valueLabel {
            font-size: 12px;
            top: -6px;
            background-color: unset;
            color: black;
            &:before {
                display: none
            }
            
        }
    }
`
const FlexBox = styled.div`
    display: flex;
    align-items:center;
    gap: 12px;
`

function Footer(props) {
    const AudioContext = useAudioContext()
    const { socket } = useContext(withSocket)
    const { hostName, GoLive, handleCalling } = useContext(withShow)
    const [play, setPlay] = useState(false)
    const [volume, setVolume] = useState(50)
    const [onAir, setOnAir] = useState(false)
    const PlayButton = useRef()
    const userRole = useRole()
    const host = isHost()

    const handleOnAir = () => { setOnAir(!onAir) }
    const handleVolume = (event, newVolume) => { setVolume(newVolume) }
    const handlePlay = () => { setPlay(!play) }

    const [join, setJoin] = useState(false)
    socket.on("Room_Joined", data => {
        setJoin(!join)
    })

    // useEffect(() => {
    function playStream(buffer) {
        // if (!host) {
        const source = AudioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(AudioContext.destination);
        source.start();
        console.log("Playing...")
        // };
    }
    socket.on("stream", playStream)
    // }, [join])



    return (
        <Container>
            <FlexBox>
                <MuiIconButton onClick={handlePlay} ref={PlayButton} >
                    {
                        play ? (<Pause />) : (<PlayArrow />)
                    }
                </MuiIconButton>
                <SliderBox>
                    <VolumeDown />
                    <MuiSlider
                        valueLabelDisplay="auto"
                        aria-label="Volume"
                        value={volume}
                        onChange={handleVolume} />
                    <VolumeUp />
                </SliderBox>
            </FlexBox>
            <FlexBox>

                {host && (
                    <Button
                        variant='contained'
                        color='success'
                        disableElevation
                        onClick={() => StartStreaming(socket)}
                        startIcon={<RadioButtonCheckedRounded />} >Go Live</Button>
                )
                    // (
                    //     <FlexBox>
                    //         <Text> Want to speak?</Text>
                    //         <Button
                    //             variant='contained'
                    //             color='primary'
                    //             disableElevation
                    //             onClick={handleCalling}
                    //             startIcon={<Phone />} >Call</Button>
                    //     </FlexBox>
                    // )
                }

            </FlexBox>
        </Container >
    )
}

export default Footer