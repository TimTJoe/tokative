import React, { useState, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form"
import { Link, Typography, Divider, Slide, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useLocation } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import useTitle from "@hooks/useTitle"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import styled from 'styled-components';

import NavBar from "../components/NavBar"
import Body from "@components/form/Body"
import FormBox from "@components/form/FormBox"
import Header from "@components/form/Header"
import Input from "@components/form/Input"
import Button from "@components/form/Button"
import Sheet from "@components/form/Sheet"
import Pattern from '@components/form/Pattern';

const LOGIN_URI = "http://localhost:8020/login"

const Slidebox = styled(Box)`
    && {
        padding: 12px;
        box-sizing: border-box;
        width: calc(400px + 48px);
        margin: auto;
        overflow: hidden;
    }
`

export default function Login() {
    useTitle("Tokative - Log in to continue | Sign in")
    const location = useLocation()
    const user = location.state?.user || null;
    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(false)
    const [slideIn, setSlideIn] = useState(false)
    const slideRef = useRef(null)
    const navigate = useNavigate()
    const [statusCode, setStatusCode] = useState(null)

    function handleOnFocus() { setDisable(false) }

    useEffect(() => {
        setSlideIn(true)
    }, [])

    const [values, setValues] = useState({
        email: user?.email || "",
        password: ""
    })

    const { setError, register, handleSubmit, formState: { errors } } = useForm()
    const handleErrors = (errors) => { }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        setDisable(true)
        setLoading(true)
        try {
            const response = await axios.post(LOGIN_URI, values);
            const data = response.data;
            const { isAuth, user } = data;
            if (isAuth) {
                navigate("/", { state: { user } })
            } else {
                throw {
                    message: "Incorrect email or password. Try again",
                }
            }

        } catch (error) {
            // alert(JSON.stringify(error.response.status))
            setStatusCode(error.response.status)
            console.log(error.response.status)
            if (error.message) {
                setError("password", { message: error.message });
                setError("email", { message: null });
            }
            setDisable(false)
            setLoading(false)
        }
    }
    return (
        <Body>
            <NavBar />
            <Slidebox ref={slideRef}>
                <Slide direction="left" in={slideIn} mountOnEnter unmountOnExit container={slideRef.current}>
                    <Box>
                        <Sheet>
                            {loading && <LinearProgress />}
                            {statusCode && statusCode}

                            <Header
                                headline="Welcome!"
                                tagline="Sign in to continue." />

                            <FormBox
                                method='POST'
                                autoComplete='on'
                                onSubmit={handleSubmit(handleLogin, handleErrors)}>

                                <Input
                                    autoFocus
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onFocus={handleOnFocus}
                                    {...register("email", Pattern.email)}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email?.message}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                                <Input
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onFocus={handleOnFocus}
                                    {...register("password", Pattern.password)}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password?.message}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />

                                {/* <Typography variant='body2' sx={{ my: 1, }}>
                                <Link
                                    href="/signup"
                                    underline="none">
                                    Forget Password?
                                </Link>
                            </Typography> */}

                                <Button
                                    type="submit"
                                    color="primary"
                                    variant='contained'
                                    disableElevation
                                    disabled={disable}
                                > Log in </Button>

                                <Divider sx={{ mt: 2 }} />

                                <Typography
                                    variant='body2'
                                    sx={{ mt: 2, mx: "auto", color: `${grey[700]}` }}> Don't have an account?
                                    <Link href="/signup" underline="none">
                                        Create new account </Link>
                                </Typography>
                            </FormBox>
                        </Sheet>
                    </Box>
                </Slide>
            </Slidebox>
        </Body>
    );
}