import React from 'react'
import styled from "styled-components"

const Box = styled.div`
    display: flex;
    gap: 12px;
    align-items: initial;
    & > * {
        flex: 2
    }
`

const Flexbox = ({ children }) => {
    return (<Box>{children}</Box>)
}

export default Flexbox