import React, {useState} from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

const Toggler = styled(Typography)`
    && {
        font-size: .9rem;
        display: inline-block;
        color: #868686;
        cursor: pointer;
    }
`
function ReadMore({ children, length }) {
    const fulltext = children
    const [readMore, setReadMore] = useState(false)
    function handleRemore() { setReadMore(!readMore) }
    console.log(children)
  return (
      <>
          { readMore ? children : children.slice(0, length)}
          <Toggler onClick={handleRemore}>
              {readMore ? "...Read more" : "...Show less"}
          </Toggler>
      </>
  )
}

export default ReadMore