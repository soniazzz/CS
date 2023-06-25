import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Footer from '../Footer.jsx'

export default function LoginPage(props) {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	function handleLogin(userID) {
        sessionStorage.setItem('session_token', userID)
        console.log('UserID: ' + userID)
    }

	const navigate = useNavigate()

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
	        handleLogin(data.user_id)
	        navigate('/profile')
	      }
	    } else {
	      alert('Error logging in. Please try again.')
	    }
	}

	return (
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
	          <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
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
	        <Footer />
	      </Container>
    )
}
