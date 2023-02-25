import React from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
// import dotenv from "dotenv"
// // dotenv.config()
const LOGOUT_URL = "http://localhost:8020/logout"

function Logout() {

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogout = () => {
        axios.delete(LOGOUT_URL, { withCredentials: true })
            .then(res => {
                console.log(res)
                const tokative_sid = "tokative_sid"
                document.cookie = tokative_sid + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                localStorage.clear()
                location.state = null
                navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <button onClick={handleLogout} >logout</button>
    )
}



/**
 * SEND A REQUEST TO THE BACKEND TO LOGOUT THE USER
 * CLEAR THE LOCAL STORAGE
 * CLEAR THE USELOCATION STATE
 * REDIRECT TO THE LOGIN PAGE
 */

export default Logout