import * as React from 'react';
import styled from "styled-components"
import Logo from '@components/Logo';
import { NavLink } from 'react-router-dom';

const Header = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 6px;
    padding-left: 24px;
`


function NavBar() {
    return (
        <Header >
            <NavLink to={"/"}>
            <Logo />
            </NavLink>
        </Header>
    );
}

export default NavBar