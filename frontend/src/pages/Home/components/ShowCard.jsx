import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Typography, Avatar, Button } from "@mui/material"
import HeadText from './HeadText'
import Tagline from './Tagline'
import getShowHost from "@helpers/getShowHost"
import axios from "axios";
const DATA_URL = "http://localhost:8020/show/host/";
import { useNavigate } from 'react-router-dom'

const Showcard = styled.div`
    border-radius: 11px;
    width: calc(300px - 12px);
    height: 200px;
    background: rgb(152,92,249);
    background: linear-gradient(16deg, rgba(152,92,249,1) 0%, rgba(186,64,238,1) 54%);
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px;
    
`

const CardHead = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 12px;
`

const Icon = styled(Avatar)`
    && {
        width: 22px;
        height: 22px;
    }
`

const Hostname = styled(HeadText)`
    && {
        text-transform: capitalize;
        color: #f3f3f3;
    }
    `
const Status = styled(Typography)`
    && {
        border-radius: 8px;
        padding: 0 4px;
        font-size: .6rem;
        background-color: #df2727;
        color: #ffffff;
        font-weight: bold;
        position: relative;
        margin-left: 4px;

        &&:before,
        &&:after {
        content:'';
        position:absolute;
        top:0; 
        right:0; 
        bottom:0; 
        left:0;
        border-radius:8px;
        border:1.2px solid #df2727;
        }

        &&:before {
        animation: ripple 2s linear infinite;
        }
        &&:after {
        animation: ripple 2s linear 1s infinite;
        }
    }
        @keyframes ripple {
            0% {transform:scale(1); }
            75% {transform:scale(1.40); opacity:1;}
            100% {transform:scale(1.75); opacity:0;}
        }
    `

const Showname = styled(HeadText)`
    && {
        font-size: 1.25rem;
        line-height: 1.2;
        color: #f5f5f5;
    }
`

const Showbio = styled(Tagline)`
    && {
        padding: 5px 0;
        color: #fafafa;
    }
`


const JoinButton = styled(Button)`
    && {
        border-radius: 17px;
        padding: 4px 0;
        margin-top: auto;
        background-color: #faf7f7;
        color: #141414;
        font-weight: 600;
        font-size: 1rem;
        text-transform: capitalize;
        &&:hover {
        background-color: #faf7f7;
        }
        &&:active {
        transform: scale(.98);
        }
            
    }
`


function ShowCard(props) {
    const [host, setHost] = useState()
    const navigate = useNavigate()
    const goto = () => navigate("/show?r=" + props?.token)
    let about = props?.about || "..."
    useEffect(() => {
        const fetchData = async () => {
            const user = await axios.get(DATA_URL + props?.user_uuid)
            setHost(user.data.fullname)
        }
        fetchData()
    }, [props])

    return (
        <Showcard>
            <CardHead>
                <Icon src={props?.avatar} alt="Timothy T. Joe" />
                <Hostname>{host}</Hostname>
                &#x2022;
                <Status> Live</Status>
            </CardHead>
            <Showname> {props?.name} </Showname>
            <Showbio>
                {
                    about.length > 79 ?
                        about.substring(0, 79) + "..." : about
                }
            </Showbio>
            <JoinButton
                variant="contained"
                color="primary"
                disableElevation
                onClick={goto}
            >Join</JoinButton>
        </Showcard>
    )
}

export default ShowCard