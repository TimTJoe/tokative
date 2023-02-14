import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Outlet, Route } from "react-router-dom"
import Index from '@pages/Home'
import Signup from '@pages/signup'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
      <Outlet />
  </Router>
)
