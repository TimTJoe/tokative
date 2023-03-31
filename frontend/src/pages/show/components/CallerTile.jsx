import React, { useContext } from 'react'
import { Typography, Avatar, Button, IconButton } from '@mui/material'
import { MicOff, Mic } from "@mui/icons-material"
import styled from 'styled-components'
import withShow from '@contexts/withShow'


const Container = styled.section`
    border-radius: 8px;
    background-color: #F2F2F2;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
`

const UserIcon = styled(Avatar)`
    && {
    width: 32px;
    height: 32px;
    }
`

const Name = styled(Typography)`
    && {
        font-size: small;
        font-weight: 900;
        text-align: center;
    }
`

const FlexBox = styled.div`
    display: flex;
    gap: 6px;
    align-items:center;
`

const MuiButton = styled(Button)`
    && {
        line-height: 1;
        text-transform: capitalize;
        border-radius: 17px;
        padding: 9px 16px;
        font-size: small;
        font-weight: bolder;
    }
`
const MuiIconButton = styled(IconButton)`
    && {
        background-color: #D9D9D9;
        width: 32px;
        height: 32px;
    }
`


function CallerTile(props) {
    const { calling } = useContext(withShow)
    return (
        <Container>
            <FlexBox>
                <UserIcon src="/" alt={props.caller?.name || "Timothy T. Joe"} />
                <Name variant='body1'>{props.caller?.name || "Timothy T. Joe"}</Name>
            </FlexBox>
            <FlexBox>
                {
                    calling && (
                        <>
                            <Typography>
                                {props.caller?.name || "Timothy is calling"}
                            </Typography>
                            <MuiButton variant='contained' color="primary" disableElevation>Answer</MuiButton>
                            <MuiIconButton>
                                <Mic />
                            </MuiIconButton>
                        </>
                    )

                }
            </FlexBox>
        </Container>
    )
}

export default CallerTile