import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form"
import { Link, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
axios.defaults.withCredentials = false;
import LinearProgress from '@mui/material/LinearProgress';
import useTitle from '@hooks/useTitle';

import Sheet from '@components/form/Sheet';
import Header from '@components/form/Header';
import Input from '@components/form/Input';
import Button from '@components/form/Button';
import Pattern from '@components/form/Pattern';
import Body from '@components/form/Body';
import FormBox from '@components/form/FormBox';
import Option from '@components/form/Option';
import Select from '@components/form/Select';

import NavBar from '../components/NavBar';


const SIGNUP_URI = "http://localhost:8020/signup/"

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
    useTitle("Tokative - Create a new account | Sign up");
    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()

    function handleOnFocus(e) {
        setDisable(false)
        setLoading(false)
    }


    const [values, setValues] = useState({
        fullname: "",
        email: "",
        gender: "",
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

    const handleSignup = async (e) => {
        setDisable(true)
        setLoading(true)
        try {
            const response = await axios.post(SIGNUP_URI, values);
            const data = response.data;
            const { success, user } = data
            if (success) {
                setDisable(false)
                setLoading(false)
                navigate("/", { state: { user } })
            } else {
                throw {
                    errors: data
                }
            }

        } catch (error) {
            setError(error.errors.name, { message: error.errors.message })
            setDisable(false)
            setLoading(false)
        }
    }
    return (
        <Body>
            <NavBar />

            <Sheet >
                {loading && <LinearProgress />}

                <Header
                    headline="Welcome!"
                    tagline="Create a new account"
                />
                <FormBox
                    method='POST'
                    onSubmit={handleSubmit(handleSignup, handleErrors)}
                >
                    <Input
                        autoFocus
                        onFocus={handleOnFocus}
                        label="Full name"
                        name="fullname"
                        type="text"
                        placeholder='John Doe'
                        value={values.fullname}
                        {...register("fullname", Pattern.fullname)}
                        error={Boolean(errors.fullname)}
                        helperText={errors.fullname?.message}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        required
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder='johndoe@email.com'
                        value={values.email}
                        {...register("email", Pattern.email)}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        onChange={handleChange}
                        onFocus={handleOnFocus}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        required
                    />

                    <Select
                        select
                        defaultValue="Male"
                        label="Select Gender"
                        value={values.gender}
                        {...register("gender", Pattern.gender)}
                        error={Boolean(errors.gender)}
                        helperText={errors.gender?.message}
                        onChange={handleChange}
                        onFocus={handleOnFocus}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        required
                    >
                        {genders.map((option) => (
                            <Option key={option.value} value={option.value}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder='********'
                        value={values.password}
                        {...register("password", Pattern.password)}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        onChange={handleChange}
                        onFocus={handleOnFocus}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        required
                    />

                    <Button
                        type="submit"
                        color="primary"
                        variant='contained'
                        disableElevation
                        disabled={disable}
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