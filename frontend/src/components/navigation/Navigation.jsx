import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import Options from './Options'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    padding: 0 4px;
    box-shadow: 1px 2px 1px rgba(0,0,0,0.1);

`


function Navigation() {
    return (
        <Nav>
            <Link to={"/"}>
                <Logo />
            </Link>
            <Options />
        </Nav>
    )
}

export default Navigation