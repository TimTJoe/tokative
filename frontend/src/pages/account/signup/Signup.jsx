import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import styled from "styled-components"
import Sheet from '../components/Sheet';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { useForm } from "react-hook-form"
import { Link, Typography, TextField, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';
import Pattern from '../components/Pattern';
import Body from '../components/Body';
import FormBox from '../components/FormBox';
import Option from '../components/Option';
import Select from '../components/Select';
import useTitle from '@hooks/useTitle';

// import axios from "axios"

const SIGNUP_URI = "http://localhost:8020/signup"

const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'others',
    label: 'Others',
  },
]

export default function Signup() {
    
    useTitle("Tokative - Create a new account | Sign up")

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        gender: "",
        password: ""
    })
    const { setError, register, handleSubmit, formState: { errors } } = useForm()
    const handleErrors = (errors) => { }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSignup = async (e) => {
        // e.preventDefault()
        alert(JSON.stringify(values))
    }
    return (
        <Body>
            <NavBar />
            <Sheet >
                <Header
                    headline="Welcome!"
                    tagline="Create a new account"
                />
                <FormBox
                    method='POST'
                    autoComplete='off'
                    onSubmit={handleSubmit(handleSignup, handleErrors)}

                >
                    <Input
                        label="Full name"
                        name="fullname"
                        type="text"
                        value={values.fullname}
                        {...register("fullname", Pattern.fullname)}
                        error={Boolean(errors.fullname)}
                        helperText={errors.fullname?.message}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={values.email}
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
                        {...register("password", Pattern.password)}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <Option
                        select
                        defaultValue="Male"
                        label="Select Gender"
                        value={values.gender}
                        {...register("gender", Pattern.gender)}
                        error={Boolean(errors.gender)}
                        helperText={errors.gender?.message}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    >
                        {genders.map((option) => (
                            <Select key={option.value} value={option.value}>
                            {option.label}
                            </Select>
                        ))}
                    </Option>
                    
                    <Button
                        type="submit"
                        color="primary"
                        variant='contained'
                        disableElevation
                    >Sign up</Button>

                    <Typography
                        variant='body2'
                        sx={{
                            mt: 2,
                            mx: "auto",
                            color: `${grey[700]}`,
                            textDecoration: 'none',
                        }}
                    > Already have an account? <Link href="/login" underline="none"> Log in </Link>  </Typography>

                </FormBox>
            </Sheet>
        </Body>
    );
}