import { useState } from "react"
import "./Styles/App.css"
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Toolbar,
} from "@mui/material"
import { Route, Routes } from "react-router"
import SignIn from "./Components/Sign in/SignIn"
import Dashboard from "./Components/Home/Dashboard"
import Nav from "./Components/Navbar/Nav"
import Orders from "./Components/Orders Page/Orders"
import Customers from "./Components/People/Customers Page/Customers"
import { ThemeProvider } from "@emotion/react"
import Employees from "./Components/People/Employees Page/Employees"
import Managers from "./Components/People/Managers Page/Managers"
import Reports from "./Components/Secondary/Reports Page/Reports"
import Policies from "./Components/Secondary/Policies Page/Policies"
import AboutUs from "./Components/Secondary/About Us Page/AboutUs"
import Menu from "./Components/Menu Page/Menu"
const mdTheme = createTheme()
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <Nav />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <CssBaseline />

              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/managers" element={<Managers />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/about-us" element={<AboutUs />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
