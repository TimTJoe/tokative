import React, { useContext, useState, useRef } from 'react'
import { Typography, IconButton, Stack, Slider } from '@mui/material'
import styled from 'styled-components'
import Button from './Button'
import withShow from "@contexts/withShow"
import useRole from '@hooks/useRole'
import isHost from '@helpers/isHost'
import { Phone, Pause, PlayArrow, VolumeDown, VolumeUp, RadioButtonCheckedRounded, RadioRounded, PhoneAndroid } from "@mui/icons-material"

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

function Footer() {
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
                {/* {
                    host ? ( */}
                {/* ) : ( */}
                <FlexBox>
                    <Text> Want to speak?</Text>
                    <Button
                        variant='contained'
                        color='primary'
                        disableElevation
                        onClick={handleCalling}
                        startIcon={<Phone />} >Call</Button>
                </FlexBox>
                {/* <Button
                    variant='contained'
                    color='success'
                    disableElevation
                    onClick={GoLive}
                    startIcon={<RadioButtonCheckedRounded />} >Start</Button> */}
                {/* )
                } */}
                {/* {
                    onAir && ()
                } */}
            </FlexBox>
        </Container >
    )
}

export default Footer