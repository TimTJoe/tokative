import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Outlet, Route } from "react-router-dom"
import Index from '@pages/Home'
import Signup from '@pages/account/signup'
import Login from '@pages/account/login'
import Station from '@pages/station'
import Protected from '@components/Protected'
import axios from 'axios'
axios.defaults.withCredentials = true;

// import UserContext, {UserContextProvider} from '@contexts/UserDetails'
import { UserDetailsProvider } from '@contexts/UserDetails'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(null)


    return (
        <UserDetailsProvider>
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
        </UserDetailsProvider>
    )
}

export default App