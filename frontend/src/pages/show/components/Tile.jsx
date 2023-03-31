import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    border-radius: 12px;
    background-color: #F2F2F2;
    width: 120px;
    height: 130px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Avatar = styled.img`
    border-radius: 50%;
    border: solid red;
    width: 69px;
    height: 69px;
    overflow: hidden;
    margin: 4px 0;
`

const Name = styled(Typography)`
    && {
        font-size: .8rem;
    }
`

const Role = styled(Typography)`
    && {
        font-size: .8rem;
        padding: 2px 0;
        color: #7F7F7F;
    }
`

function Tile(props) {
  return (
      <Container>
          <Avatar src={`/${props?.avatar || ""}`} />
          <Name variant='body1'>{props?.name || "Timothy T. Joe"}</Name>
          <Role variant='body1'>{props?.role || "Listener"}</Role>
    </Container>
  )
}

export default Tile