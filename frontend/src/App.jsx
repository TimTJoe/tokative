import React, { useState, useContext } from 'react'
import { Routes, Outlet, Route } from "react-router-dom"
import Home from '@pages/Home'
import Signup from '@pages/account/signup'
import Login from '@pages/account/login'
import Protected from '@components/Protected'
import axios from 'axios'
import withAuth from '@contexts/withAuth'
import Studio from '@pages/station/Studio'
import CreateStation from '@pages/station/Create'

axios.defaults.withCredentials = true;

function App() {
    const { isAuth } = useContext(withAuth)

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="/new">
                    <Route
                        path="station"
                        element={<Protected isAuth={isAuth}><CreateStation /></Protected>} />
                </Route>
                <Route
                    path="/studio"
                    element={<Protected isAuth={isAuth}><Studio /></Protected>} />

            </Routes>
            <Outlet />
        </>
    )
}

export default App