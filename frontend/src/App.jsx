import React, { useState, useContext } from 'react'
import { Routes, Outlet, Route } from "react-router-dom"
import Index from '@pages/Home'
import Signup from '@pages/account/signup'
import Login from '@pages/account/login'
import Station from '@pages/station'
import Protected from '@components/Protected'
import axios from 'axios'
import withAuth from '@contexts/withAuth'
axios.defaults.withCredentials = true;

function App() {
    const {isAuth} = useContext(withAuth)

    return (
        <>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/station"
                    element={<Protected isAuth={isAuth}><Station /></Protected>} />

            </Routes>
            <Outlet />
        </>
    )
}

export default App