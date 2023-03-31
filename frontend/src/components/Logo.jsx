import React from 'react'
import logoImg from "@assets/logo.svg"
import styled from 'styled-components'

const Image = styled.img`
    width: 45px;
`

function Logo(props) {
    return (
        <>
            <Image src={logoImg} />
        </>
    )
}

export default Logo