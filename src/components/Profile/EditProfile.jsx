import React, { useState } from 'react'
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
} from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'

export default function EditProfile() {
  const user_id = sessionStorage.getItem('session_token')
  const [formData, setFormData] = useState({
    username: '',
    team: '',
    phone_number: '',
    avatar: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch(
      `http://127.0.0.1:8000/bias_test/api/edit-profile/${user_id}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )
    const data = await response.json()
    if (response.ok) {
      if (data.error && data.error === 'Username already exists.') {
        alert('Username already exists. Please choose another one.')
      } else {
        window.location.href = '/'
      }
    } else {
      alert('Error. Please try again.')
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
        <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
          <CreateOutlinedIcon />
        </Avatar>

        <Typography variant='h4' component='h1' align='center' gutterBottom>
          Edit Your Profile
        </Typography>
        <Box component='form' onSubmit={handleSubmit} spacing={3}>
          <TextField
            label='Username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginTop: 2 }}
          />
          <TextField
            label='Phone'
            name='phone_number'
            value={formData.phone_number}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginTop: 2 }}
          />
          <TextField
            label='Team'
            name='team'
            value={formData.team}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginTop: 2 }}
          />
          <TextField
            label='Avatar'
            name='avatar'
            value={formData.avatar}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginTop: 2 }}
          />
          <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
            <Button type='submit' variant='contained' color='primary'>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

