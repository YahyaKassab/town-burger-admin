import { StyledEngineProvider } from '@mui/material'
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import SignIn from './Components/Sign in/SignIn'
import './Styles/index.css'
axios.defaults.baseURL = 'https://localhost:7021'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
