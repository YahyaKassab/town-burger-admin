import { useEffect, useState } from "react"
import "./Styles/App.css"
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Toolbar,
} from "@mui/material"
import { Route, Routes, useNavigate } from "react-router"
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
import { useImmerReducer } from "use-immer"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import MessageContext from "./MessageContext"
import Messages from "./Messages"
import { ToastContainer } from "react-toastify"
const mdTheme = createTheme()
function App() {
  const navigate = useNavigate()
  const initial = {
    loggedIn: {},
  }
  const reducer = (draft, action) => {
    switch (action.value) {
      case "login":
        draft.loggedIn = true
        return
      case "logout":
        draft.loggedIn = false
        return
    }
  }
  const [state, dispatch] = useImmerReducer(reducer, initial)
  return (
    <div className="App">
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <MessageContext.Provider value={Messages}>
            <ToastContainer
              position="top-left"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <ThemeProvider theme={mdTheme}>
              <Box sx={{ display: "flex" }}>
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
              </Box>
            </ThemeProvider>
          </MessageContext.Provider>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  )
}

export default App
