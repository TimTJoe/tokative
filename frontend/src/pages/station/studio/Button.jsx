import React from 'react'
import IconButton from '@mui/material/IconButton'
import styled from 'styled-components'

const Button = styled(IconButton)`
    && {
      margin:12px;
      width: 40px;
      height: 40px;
      svg.MuiSvgIcon-root {
        width: 32px;
        height: 32px;
      }
    }
`

export default Button