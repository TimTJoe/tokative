import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Outlet, Route } from "react-router-dom"
import Index from '@pages/Home'
import Signup from '@pages/account/signup'
import Login from '@pages/account/login'
import Station from '@pages/station'
import Protected from '@components/Protected'
import axios from 'axios'
import UserContext from '@contexts/UserDetails'
axios.defaults.withCredentials = true;

function App() {
    // const [isAuth, setIsAuth] = useState(false)
    // const [user, setUser] = useState(null)
    const { isAuth, profile } = useContext(UserContext)

    return (
        <>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/new/station" element={
                    <Protected isAuth={isAuth}>
                        <Station />
                    </Protected>
                } />
            </Routes>
            <Outlet />
        </>
    )
}

export default App