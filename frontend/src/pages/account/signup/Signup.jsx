import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import styled from "styled-components"
import Sheet from '../components/Sheet';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { useForm } from "react-hook-form"
import { Link, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';



const Body = styled.div`
    min-height: 98vh;
    /* background-color: #909193; */
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 12px;
    gap: 12px;
`

export default function Signup() {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        gender: "",
        password: ""
    })
    const { setError, register, handleSubmit, formState: { errors } } = useForm()
    const handleErrors = (errors) => { }

    
    const Pattern = {

        fullname: {
            required: "Full name is required",
            pattern: {
                value: /^[A-Z0-9.-]/i,
                message: "Invalid character in name."
            }
        },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email is invalid. Try another one."
            }
        },
        gender: {
            required: "Gender is required",
            // pattern: {}
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must be 8+ characters."
            }
        },
    }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        alert(JSON.stringify(values))
    }
    return (
        <Body>
            <NavBar />
            <Sheet >
                <Header
                    headline="Welcome!"
                    tagline="Sign up to continue."
                />
                <Form
                    method='POST'
                    autoComplete='off'
                    onSubmit={handleSubmit(handleSignup, handleErrors)}

                >
                    <Input
                        label="Full name"
                        name="fullname"
                        type="text"
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
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
                        {...register("password", Pattern.password)}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <Input
                        label="Gender"
                        name="gender"
                        type="text"
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    

                    <Button
                        type="submit"
                        color="primary"
                        variant='contained'
                    >Sign up</Button>

                    <Typography
                        variant='body2'
                        sx={{
                            mt: 4,
                            mx: "auto",
                            color: `${grey[700]}`
                        }}
                        // endDecorator={<Link href="/login" >Log in</Link>}
                    >Already have an account? </Typography>

                </Form>
            </Sheet>
        </Body>
    );
}