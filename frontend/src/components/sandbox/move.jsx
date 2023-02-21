import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';

export default function SimpleSlide() {
    const [slideIn, setSlideIn] = useState(false);
    const slideRef = useRef(null)

    useEffect(() => {
        setSlideIn(true);
    }, [])


    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ border: "solid red", height: "98vh" }}>
            <Box ref={slideRef} sx={{ border: "solid red", overflow: "hidden", width: 500, height: 500, mx: "auto", my: "5%", p: 2 }}>
                <Slide direction="left" in={slideIn} mountOnEnter unmountOnExit container={slideRef.current}>


                    <Paper sx={{ width: 400, height: 400, mx: "auto", my: "" }} elevation={4}></Paper>

                </Slide>
            </Box>
        </Box>
    );
}