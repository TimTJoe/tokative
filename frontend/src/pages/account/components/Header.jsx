import React from 'react'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'

const Container = styled.header`
    padding: 6px 12px 24px 12px;
`
const Headline = styled(Typography)`
    && {
        color: ${grey[800]};
        line-height: 1;
        font-weight: 900;
    }
`
const Tagline = styled(Typography)`
    && {
        color: ${grey[500]};
        line-height: 1;
    }
`


function Header(props) {
    return (
        <Container>
            <Headline variant="h4">{props.headline}</Headline>
            <Tagline variant="body1">{props.tagline}</Tagline>
        </Container>
    )
}

export default Header