import React from 'react'
import styled from 'styled-components'
import { Box, Typography } from '@mui/material'

const Container = styled(Box)`
    && {
        border-radius: 12px;
        margin: 12px;
        background-color: #D9D9D9;
        min-height: 150px;
        padding: 6px;

    }
`

const Textbox = styled(Typography)`
    && {
        font-size: medium;
        color: #3A3A3A;
    }
`


function Body() {
  return (
      <Container>
          <Textbox>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptas culpa, reprehenderit id quidem dolore facere perspiciatis velit obcaecati. Maiores nemo reprehenderit deserunt consequatur dolor? Accusantium recusandae laboriosam enim quaerat.</Textbox>
    </Container>
  )
}

export default Body