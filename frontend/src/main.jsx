import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App'
import './index.css'
import UserContext, { UserDetailsProvider } from '@contexts/UserDetails'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserDetailsProvider>
      <App />
    </UserDetailsProvider>
  </Router>
)
