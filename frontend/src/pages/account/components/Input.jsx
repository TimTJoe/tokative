import { TextField } from "@mui/material";
import styled from "styled-components";
import { blue, grey } from "@mui/material/colors";


const Input = styled(TextField)`
    && {
        border-radius: 10px;
        /* background-color: ${grey[100]}; */
    
     input.MuiInputBase-input {
        padding: .8rem;
    }
        label {
            color: ${grey[800]}
        }
    
     label.Mui-focused {
        color: ${grey[800]};
    }
    
     .MuiOutlinedInput-root {
        border-radius: 9px;
    }

     .Mui-focused fieldset {
            border-color: ${grey[800]};
        }
    }
`

export default Input