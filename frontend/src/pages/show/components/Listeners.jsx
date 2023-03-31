import React, { useState, useContext } from 'react'
import { Typography, Fade, Button, Box, Zoom } from '@mui/material'
import styled from 'styled-components'
import Tile from './Tile'
import withShow from '@contexts/withShow'
import useUser from '@hooks/useUser'
import CallerTile from './CallerTile'

const Flexbox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-wrap: wrap;
`

const Container = styled.div``

const Header = styled(Typography)`
  && {
  font-size: small;
  font-weight: 900;
  color: #616161;
  padding: 15px 0;
  }
`

const Topbox = styled.div`
  margin-bottom: 32px;
`

function Listeners() {
  const [fade, setFade] = useState(false)
  const handleFade = () => { setFade(!fade) }
  const { numParticipants, calling } = useContext(withShow)
  const user = useUser()

  return (
    <Container>
      <Header>Participants - {numParticipants}</Header>
      <Flexbox>
        {
          calling && (
            <Topbox>
              <Zoom in={calling}>
                <Box>
                  <CallerTile caller={user} />
                </Box>
              </Zoom>
            </Topbox>
          )
        }
        <Tile />
        <Tile />
      </Flexbox>
    </Container>
  )
}

export default Listeners