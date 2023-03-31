import React from 'react'
import styled from 'styled-components'
import MuiButton from "@mui/material/Button"
import AddRounded from "@mui/icons-material/AddRounded"

const Container = styled.div`
    border-radius: 12px;
    background-color: white;
    min-width: 300px;
`

const Button = styled(MuiButton)`
    && {
        background-color: white;
        padding: 8px ;
        text-transform: capitalize;
        display: flex;
        gap: 12px;
        color: #4F9CF3;
        border-radius: 17px;
        box-shadow: 1px 2px 1px rgba(0,0,0,0.1);
        font-size: 1rem;

        &&:hover {
            background-color: white;
        }
    }
`

const IconWrap = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4F9CF3;
    width: 32px;
    height: 32px;
    border: solid #4F9CF3;
    border-radius: 50%;
`

function Actions() {
    return (
        <Container>
            <Button variant='contained'>
                <IconWrap>
                    <AddRounded />
                </IconWrap>
                Create Talk Show
            </Button>
        </Container>
    )
}

export default Actions