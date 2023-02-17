import React from 'react'
import TextField from '@mui/material/TextField';
import styled from "styled-components"
import {grey}  from "@mui/material/colors"

const Option = styled(TextField)`
    && {

        .MuiSelect-select {
            padding: .8rem;
            border-radius: 10px;
        }

        label {
            color: ${grey[800]}
        }
    
        label.Mui-focused {
            color: ${grey[800]};
        }

        .Mui-focused fieldset {
            border-color: ${grey[800]};
        }

        fieldset {
            border-radius: 10px;
        }

    }
`
export default Option