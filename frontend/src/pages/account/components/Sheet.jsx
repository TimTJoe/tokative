import * as React from 'react';
import muiContainer from '@mui/material/Container';
import styled from 'styled-components';

const Container = styled(muiContainer)`
    && {
        background-color: #fff;
        border: none;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
        box-sizing: border-box;
        margin: 0 auto;
        padding: 24px 6px;
        padding-bottom: 0;
        width: 396px;
    }
`

export default function Sheet({ children }){
    return (
        <Container>{children}</Container>
    )
}