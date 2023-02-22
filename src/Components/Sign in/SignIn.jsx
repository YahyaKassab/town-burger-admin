import React, { useState, useContext } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router'
import DispatchContext from '../../DispatchContext'
import Page from '../Page'
import axios from 'axios'
import MessageContext from '../../MessageContext'

const theme = createTheme()

export default function SignIn() {
  const appDispatch = useContext(DispatchContext)
  const message = useContext(MessageContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios
      .post('/user/LoginEmployee', { email, password })
      .then((res) => {
        message.success(res.data.message)
        console.log(res.data.result)
        appDispatch({ type: 'login', value: res.data.result })
        navigate('/dashboard')
      })
      .catch((res) => {
        console.log('failed')
        console.log(res)
        message.error(res.response.data.message)
      })
  }

  return (
    // <Page nav={false}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, p: 5, backgroundColor: '#1769aa' }}>
            <LockOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h3">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              required
              // fullWidth
              style={{ width: '80%' }}
              name="password"
              label="Password"
              type={show ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
            />
            <Button
              variant="text"
              onClick={() => setShow((sh) => !sh)}
              className="px-4 py-4 ml-2   mt-4"
            >
              {show ? 'Hide' : 'Show'}
            </Button>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    // </Page>
  )
}
