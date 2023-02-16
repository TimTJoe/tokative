import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider, } from '@mui/joy/styles';
import theme from "@components/theme"
import './index.css'
import { BrowserRouter as Router, Routes, Outlet, Route } from "react-router-dom"
import Index from '@pages/Home'
import Signup from '@pages/account/signup'

export default function App()  {
    return (
        // <CssVarsProvider >
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        {/* </CssVarsProvider> */}
    )
}