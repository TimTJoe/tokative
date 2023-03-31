import React, { useContext, useState, useEffect, useRef } from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import { useLocation, useSearchParams } from "react-router-dom"
import withShow from "@contexts/withShow"
import axios from 'axios'
const DATA_URL = "http://localhost:8020/show/"
import useTitle from "@hooks/useTitle"

const Container = styled.div`
    padding: 12px;
    border-radius: 12px;
    background-color: #eeeded;
    margin: 12px 0;
`

const Name = styled(Typography)`
    && {
        font-size: 1rem;
        font-weight: 900;
        letter-spacing: 1.2px;
    }
`
const Para = styled(Typography)`
    && {
        font-size: .9rem;
        word-wrap: break-word;
        word-break: break-all;
    }
`

const Speaker = styled.section`
    border-radius: 23px;
    padding: 4px 16px;
    margin-top: 12px;
    background-color: #D9D9D9;
    display: inline-block;
`

const Small = styled(Typography)`
    && {
        font-size: .9rem;
        display: inline-block;
        color: #868686;
        cursor: pointer;
    }
`

function Body() {

    const { hostName,
        showName,
        aboutShow,
        ShowStatus,
        GetStream,
        stream,
        hostVideo,
        userRole,
        handleUserRole,
        handlePlaySound,
        playing,
        myAudio
    } = useContext(withShow)
    const [show, setShow] = useState([]);
    const [readMore, setReadMore] = useState(true)
    let [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("r");
    const location = useLocation()
    const [role, setRole] = useState("")
    // const [playing, setPlaying] = useState("")
    function handleRemore() { setReadMore(!readMore) }

    useEffect(() => {
        const fetchShow = async () => {
            const result = await axios.get(DATA_URL + token);
            setShow(result.data);
        };
        fetchShow();
    }, [location]);

    const SHOWNAME = show.name || ""
    const SHOWBODY = show.about || ""
    useTitle(show.name)

    const myVideo = useRef()

    return (
        <Container>
            <Name variant='h6'>
                {SHOWNAME}
            </Name>
            <Para variant='body1'>
                {readMore ? SHOWBODY.slice(0, 280) : SHOWBODY}
                {
                    SHOWBODY.length > 280 && (
                        <Small onClick={handleRemore}>
                            {readMore ? "...Show more" : "...Show less"}
                        </Small>
                    )
                }

            </Para>
            <Speaker>
                <Para variant='body1'>Host: {hostName} </Para>
            </Speaker>
            {/* <audio ref={myAudio} controls autoPlay ></audio>
            <div>
                <h4>Role {userRole}</h4>
                <button onClick={() => handleUserRole("client")}>Client</button>
                <button onClick={() => handleUserRole("server")}>Server</button>
            </div>
            <div>
                {
                    userRole === "client" ? (
                        <>
                            <h3>Play sound</h3>
                            <button onClick={handlePlaySound}>Play Sound</button>
                        </>
                    ) : null
                }
            </div>
            <div>
                <h4>Playing: {playing} </h4>
            </div> */}
        </Container>
    )
}

export default Body