import React from 'react'
import logoImg from "@assets/logo_text.svg"
import styled from 'styled-components'

const Image = styled.img`
    width: calc(45px * 3);
`

function Logo(props) {
  return (
      <>
          <Image src={logoImg} />
      </>
  )
}

export default Logo