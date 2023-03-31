import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'

const Container = styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-around;
    flex-wrap: wrap;
`

function Listeners() {
  return (
      <Container>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
    </Container>
  )
}

export default Listeners