import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Outlet, Route } from "react-router-dom"
import Index from '@pages/Home'
import Signup from '@pages/account/signup'
import Login from '@pages/account/login'
import Station from '@pages/station'

// import UserContext, {UserContextProvider} from '@contexts/UserDetails'
import { UserDetailsProvider } from '@contexts/UserDetails'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserDetailsProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new/station" element={<Station />} />
      </Routes>
      <Outlet />
    </UserDetailsProvider>
  </Router>
)
