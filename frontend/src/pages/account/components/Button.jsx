import muiButton from "@mui/material/Button";
import styled from "styled-components";

const Button = styled(muiButton)`
    && {
        padding: 10px;
        font-size: 1rem;
        border-radius: 9px;
        text-transform: capitalize;
        font-weight: bolder;
        transition: transform .1s ease-out;

        &&:active {
            transform: scale(0.97)
        }
    }
`

export default Button