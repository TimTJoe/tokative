import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

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

function Header() {
    const [start, setStart] = useState(false)
    const handleStart = () => {
        setStart(!start)
    }
    const station = useLocation().state.station

    return (
        <Container>
            <Icon src="https://i.imgur.com/4Z5YQ2x.png" />
            <Textbox>
                <LargeText>{station.name} &bull; {station.frequency}</LargeText>
                <SmallText>0 listeners </SmallText>
            </Textbox>
        </Container>
    )
}

export default Header