import React, { useContext, useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import { useLocation, useSearchParams } from "react-router-dom"
import withShow from "@contexts/withShow"
import ReadMoreReact from 'read-more-react';
import axios from 'axios'
import ReadMore from './ReadMore'
const DATA_URL = "http://localhost:8020/show/"

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

    const { showName, aboutShow } = useContext(withShow)
    const [show, setShow] = useState([]);
    const [readMore, setReadMore] = useState(false)
    let [searchParams, setSearchParams] = useSearchParams();
    
    const token = searchParams.get("r");
    const location = useLocation()
    function handleRemore() { setReadMore(!readMore) }

    useEffect(() => {
        const fetchShow = async () => {
            const result = await axios.get(DATA_URL + token);
            setShow(result.data);
        };
        fetchShow();
    }, [location]);

    return (
        <Container>
            <Name variant='h6'>
                {showName ? showName : show.name}
            </Name>
            <Para variant='body1'>
                {readMore ? aboutShow.substring(0, 280) : show.about }
                <Small onClick={handleRemore}>
                    {readMore ? "...Read more" : "...Show less"}
                </Small>
            </Para>
            <Speaker>
                <Para variant='body1'>Speaking: Timothy T. Joe </Para>
            </Speaker>
        </Container>
    )
}

export default Body