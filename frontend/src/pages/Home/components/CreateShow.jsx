import React from 'react'
import styled from 'styled-components'
import { Button, IconButton, Typography } from "@mui/material"
import AddRounded from "@mui/icons-material/AddRounded"
import { useNavigate, useLocation } from "react-router-dom"
import HeadText from './HeadText'
import Tagline from './Tagline'


const ContainerBtn = styled(Button)`
    && {
        min-width: 100%;
        background-color: white;
        padding: 12px ;
        border-radius: 13px;
        text-transform: capitalize;
        display: flex;
        justify-content: left;
        gap: 12px;
        margin: 12px 0;
        border-radius: 14px;
        box-shadow: 1px 2px 1px rgba(0,0,0,0.1);
        &&:hover {
            background-color: white;
        }
    }
`

const IButton = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4F9CF3;
    width: 32px;
    height: 32px;
    border: solid #4F9CF3;
    border-radius: 50%;
`



const Content = styled.section`
    display: flex;
    flex-direction: column;
`


function CreateShow() {
    const goto = useNavigate()

    const handleClick = () => {
        goto("/new/show")
    }

    return (
        <ContainerBtn onClick={handleClick}>
            <IButton >
                <AddRounded />
            </IButton>
            <Content>
                <HeadText>Create Talk Show</HeadText>
                <Tagline>Share ideas. Discuss what matters.</Tagline>
            </Content>
        </ContainerBtn>
    )
}

export default CreateShow