import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import withShow from '@contexts/withShow'
import Button from './Button'


const Block = styled.header`
    display: flex;
    align-items: center;
    gap: 6px;
`

const Icon = styled.img`
    display:  inline-block;
    width: 38px;
    height: 38px;
    border-radius: 24px;
    object-fit: cover;
    border: solid red;
    outline: none;
    overflow: hidden;
`

const BtnWrap = styled.span`
    margin-left: auto;
`

const Name = styled(Typography)`
    && {
        font-size: 1.1rem;
        font-weight: 900;
        letter-spacing: 1.2px;
    }
`
function Header() {
    const { hostName  } = useContext(withShow)

    return (
        <Block>
            <Icon src='/sdsd/s/s' />
            <Name variant='h6' >{hostName}</Name>
            <BtnWrap>
                <Button variant='contained' color='error' disableElevation> Leave </Button>
            </BtnWrap>
        </Block>
    )
}

export default Header