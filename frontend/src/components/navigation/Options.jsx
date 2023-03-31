import React from 'react'
import { Avatar, Button, Typography } from "@mui/material"
import useUser from "@hooks/useUser";
import useLogout from "@hooks/useLogout";
import styled from 'styled-components';
import { Person2 } from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
`

const Icon = styled(Avatar)`
    && {
        width: 25px;
        height: 25px;
    }
`

const Name = styled(Typography)`&& {
    font-weight: 900;
    font-size: large;

}`

const SigninButton = styled(Button)`
    && {
        border-radius: 17px;
        text-transform: capitalize;
        background-color: #c8e2fd86;
        font-weight: bolder;
    }
`

function Options() {
    const user = useUser()
    const username = user.fullname || ""
    const logout = useLogout()
    const navigate = useNavigate()
    const goSignIn = () => { navigate("/login") }

    return (
        <Container>
            {
                user.uuid
                    ?
                    <>
                        <Name variant='body1'>
                            {username > 8
                                ? username.substring(0, 8) + "..."
                                : username}
                        </Name>
                        <Icon src="/" alt={username} />
                    </>
                    : (<SigninButton startIcon={<Person2 />} variant='outlined' onClick={goSignIn}>Sign in</SigninButton>)
            }


        </Container>
    )
}

export default Options