import * as React from 'react';
import muiContainer from '@mui/material/Container';
import styled from 'styled-components';

const Container = styled(muiContainer)`
    && {
        width: 370px;
        min-height: 400px;
        margin: 4px auto;
        margin-top: 16px;
        padding: 3px 2px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        border-radius: 12px;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    }
`

export default function Sheet({ children }){
    return (
        <Container>{children}</Container>
    )
}