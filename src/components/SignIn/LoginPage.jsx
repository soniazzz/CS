
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'

import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'


function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/soniazzz'>
        soniazzz's github
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme()

export function LoginPage(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        'http://127.0.0.1:8000/bias_test/api/authenticate-session',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_token: sessionStorage.getItem('session_token'),
          }),
        }
      )
      if (response.ok) navigate('/')
    }
    fn()
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    
    event.preventDefault()

    const response = await fetch('http://127.0.0.1:8000/bias_test/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      const data = await response.json()
      if (data.error && data.error === 'User does not exist.') {
        alert('User dose not exist. Please sign up for a new account.')
      } else if (data.error && data.error === 'Wrong password.') {
        alert('Wrong password.')
      } else {
        console.log(data.user_id)

        props.onLogin(data.user_id)
        navigate('/')
      }
    } else {
      alert('Error logging in. Please try again.')
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component='h1'
            variant='h5'
            fontStyle={{ color: 'black' }}
          >
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              id='password'
              autoComplete='current-password'
              onChange={handleChange}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

/*
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpPage.css'

export function LoginPage(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        'http://127.0.0.1:8000/bias_test/api/authenticate-session',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_token: sessionStorage.getItem('session_token'),
          }),
        }
      )
      if (response.ok) navigate('/')
    }
    fn()
  }, [])

  

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('http://127.0.0.1:8000/bias_test/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      const data = await response.json()
      if (data.error && data.error === 'User does not exist.') {
        alert('User dose not exist. Please sign up for a new account.')
      } else if (data.error && data.error === 'Wrong password.') {
        alert('Wrong password.')
      } else {
        console.log(data.user_id)

        props.onLogin(data.user_id)
        navigate('/')

        
      }
    } else {
      alert('Error logging in. Please try again.')
    }
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type='submit'>Login</button>
      </form>
      <p>
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </p>
    </div>
  )
  
 
}
*/
