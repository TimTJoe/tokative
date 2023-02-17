import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import useTitle  from "@hooks/useTitle"
import Body from "../components/Body"
import FormBox from "../components/FormBox"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Input from "../components/Input"
import Button from "../components/Button"
import Sheet from "../components/Sheet"
import Pattern from '../components/Pattern';
import { Link, Typography, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';

const LOGIN_URI = "http://localhost:8020/login"

export default function Login() {
    
    useTitle("Tokative - Log in to continue | Sign in")

    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const { setError, register, handleSubmit, formState: { errors } } = useForm()
    const handleErrors = (errors) => { }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        // e.preventDefault()
        alert(JSON.stringify(values))
    }
    return (
        <Body>
            <NavBar />
            <Sheet>
                <Header headline="Welcome!" tagline="Sign up to continue." />

                <FormBox method='POST' autoComplete='off'
                    onSubmit={handleSubmit(handleLogin, handleErrors)}>
                    
                    <Input label="Email" name="email" type="email"
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

                    <Typography variant='body2' sx={{my: 1, }}>
                        <Link href="/signup" underline="none"> 
                            Forget Password?
                        </Link> 
                    </Typography>
                    
                    <Button
                        type="submit"
                        color="primary"
                        variant='contained'
                        disableElevation
                    > Sign up</Button>

                    <Divider sx={{mt: 2}} />

                    <Typography
                        variant='body2'
                        sx={{ mt: 2, mx: "auto", color: `${grey[700]}`}}> Don't have an account?  <Link href="/signup" underline="none"> 
                    Create new account </Link>  
                    </Typography>
                </FormBox>
            </Sheet>
        </Body>
    );
}