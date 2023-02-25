import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App'
import './index.css'
import { ProvideUser } from '@contexts/withUser'
import { ProvideAuth } from '@contexts/withAuth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ProvideUser>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </ProvideUser>
  </Router>
)
