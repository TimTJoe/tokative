import React from 'react'
import MuiInput from './Input';
import styled from "styled-components"
import {grey}  from "@mui/material/colors"

const Select = styled(MuiInput)`
    && {
        .MuiSelect-select {
            padding: .8rem;
            border-radius: 10px;
        }
    }
`
export default Select