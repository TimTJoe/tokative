import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link, Typography, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useLocation } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import useTitle from "@hooks/useTitle"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

import Body from "../components/Body"
import FormBox from "../components/FormBox"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Input from "../components/Input"
import Button from "../components/Button"
import Sheet from "../components/Sheet"
import Pattern from '../components/Pattern';

const LOGIN_URI = "http://localhost:8020/login"

export default function Login() {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()

    function handleOnFocus() { setDisable(false) }
    useTitle("Tokative - Log in to continue | Sign in")

    const user = location.state?.user || null;

    const [values, setValues] = useState({
        email: user?.email || "",
        password: ""
    })
    const {
        setError,
        register,
        handleSubmit,
        formState: { errors } } = useForm()
    const handleErrors = (errors) => { }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        // alert(JSON.stringify(values))
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
            if (error.message) {
                setError("password", { message: "Incorrect email or password. Try again" });
                setError("email", { message: null });
            }
            setDisable(false)
            setLoading(false)
        }
    }
    return (
        <Body>
            <NavBar />
            <Sheet>
                {loading && <LinearProgress />}

                <Header
                    headline="Welcome!"
                    tagline="Sign in to continue." />

                <FormBox
                    method='POST'
                    autoComplete='on'
                    onSubmit={handleSubmit(handleLogin, handleErrors)}>

                    <Input
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

                    <Typography variant='body2' sx={{ my: 1, }}>
                        <Link
                            href="/signup"
                            underline="none">
                            Forget Password?
                        </Link>
                    </Typography>

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
                        sx={{
                            mt: 2,
                            mx: "auto",
                            color: `${grey[700]}`
                        }}> Don't have an account?
                        <Link href="/signup" underline="none"> Create new account </Link>
                    </Typography>
                </FormBox>
            </Sheet>
        </Body>
    );
}