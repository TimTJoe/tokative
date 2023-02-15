import * as React from 'react';
import styled from "styled-components"
import Logo from '@components/Logo';

const Header = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 12px 6px;
`


function NavBar() {
    return (
        <Header >
            <Logo />
        </Header>
    );
}

export default NavBar