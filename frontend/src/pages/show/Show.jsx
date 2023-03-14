import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Listeners from './components/Listeners'
import Navigation from '@components/navigation'
import MuiContainer from "@mui/material/Container"
import styled from 'styled-components'

const Container = styled(MuiContainer)`
  && {
    margin-top: 12px;
  }
`

const Show = () => {
  return (
        <>
        <Navigation />
        <Container maxWidth="sm" disableGutters>
          <Header />
          <Body />
          <Listeners />
        </Container>
      </>
  )
}

export default Show