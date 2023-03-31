import React from 'react'
import styled from 'styled-components'
import Logo from "./secondary/Logo"
import Actions from './secondary/Actions'
import Options from './secondary/Options'

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`

function Secondary() {
    return (
        <Container>
            <Logo />
            <Actions />
            <Options />
        </Container>
    )
}

export default Secondary