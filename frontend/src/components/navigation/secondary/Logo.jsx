import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoComp from '@components/Logo'

const Wrapper = styled.div`
    border-radius: 12px;
    background-color: white;
    padding-top: 8px;
    display: grid;
    place-items: center;
    min-width: 200px;
`

function Logo() {
    return (
        <Wrapper>
            <Link to={"/"}>
                <LogoComp />
            </Link>
        </Wrapper>
    )
}

export default Logo