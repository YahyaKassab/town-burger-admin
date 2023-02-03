import { useState } from "react"
import "./Styles/App.css"
import { Button } from "@mui/material"
import { Route, Routes } from "react-router"
import SignIn from "./Components/Sign in/SignIn"
import Dashboard from "./Components/Home/Dashboard"
import Nav from "./Components/Navbar/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
