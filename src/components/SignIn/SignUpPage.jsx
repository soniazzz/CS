import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import "./SignUpPage.css"
import { Container, Typography, TextField, Button, Grid, Box, Avatar} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Footer from '../Footer.jsx'



export function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    team: '',
    phone_number: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch(
      'http://127.0.0.1:8000/bias_test/api/signup/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      if (data.error && data.error === 'Username already exists.') {
        alert('Username already exists. Please choose another one.')
      } else {
        window.location.href = '/login'
      }
    } else {
      alert('Error signing up. Please try again.')
    }
  }
  return (
    <Container maxWidth='xs'>
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
        <Typography variant='h5' align='center' gutterBottom>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='Username'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Password'
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Team'
                id='team'
                name='team'
                value={formData.team}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Phone'
                type='tel'
                id='phone'
                name='phone_number'
                value={formData.phone_number}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box mt={2}>
          <Typography variant='body1' align='center'>
            Already have an account? <Link to='/login'>Log in</Link>
          </Typography>
        </Box>
        <Footer />
      </Box>
    </Container>
  )

}
