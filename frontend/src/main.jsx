import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { ProvideUser } from '@contexts/withUser'
import { ProvideAuth } from '@contexts/withAuth'
import { ProvideShow } from '@contexts/withShow'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ProvideAuth>
      <ProvideUser>
        <ProvideShow>
          <App />
        </ProvideShow>
      </ProvideUser>
    </ProvideAuth>
  </Router>
)
