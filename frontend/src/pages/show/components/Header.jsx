import React, { useContext, useState } from 'react'
import { Typography, Divider, Avatar, IconButton, Tooltip } from '@mui/material'
import styled from 'styled-components'
import withShow from '@contexts/withShow'
import Button from './Button'
import { Call, Mic, MicOff } from "@mui/icons-material"
import isHost from '@helpers/isHost'

const Block = styled.header`
    display: flex;
    align-items: center;
    gap: 6px;
    padding-bottom: 12px;
`

const Icon = styled(Avatar)`
    &&{width: 38px;
    height: 38px;}
`

const MuiIconButton = styled(IconButton)`
    && {
        background-color: #d9d9d9;
        svg {
            color: black;
        }
    }
`

const BtnWrap = styled.span`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 6px;
`

const Name = styled(Typography)`
    && {
        font-size: 1.1rem;
        font-weight: 900;
        letter-spacing: 1.2px;
    }
`

const Role = styled(Typography)`
    && {border-radius: 8px;
    background-color: #dfdfdf;
    color: #181818;
    padding: 4px 12px;
    font-size: x-small;
    font-weight: bolder;
    }
`
function Header(props) {
    const { hostName, start, handleStart, StartShow } = useContext(withShow)
    const [mute, setMute] = useState(false)
    const host = isHost()

    //HANDLERS
    const handleMute = () => { setMute(!mute) }

    return (
        <Block>
            <Icon src='/' alt={hostName} />
            <Name variant='h6' >{hostName}</Name>
            &#x2022;
            <Role>Host</Role>
            <BtnWrap>
                {
                    host ? (
                        <Tooltip title={mute ? "Mute" : "Unmute"} >
                            <MuiIconButton onClick={handleMute}>
                                {mute ? <Mic /> : <MicOff />}
                            </MuiIconButton>
                        </Tooltip>
                    ) : null

                }
            </BtnWrap>
        </Block>
    )
}

export default Header