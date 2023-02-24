import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Input from "@components/form/Input";

const Textarea = styled(Input)`
    && {
        
        div.MuiInputBase-root {
            textarea.MuiInputBase-input{
                min-height: 100px;
                max-height: 200px;
            }
        }
    }
`

export default Textarea