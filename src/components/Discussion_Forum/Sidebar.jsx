import React from 'react'
import { Paper, Typography, Box } from '@mui/material'

const Sidebar = ({ user }) => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant='h6' component='div'>
        User Information
      </Typography>
      <Box>
        <Typography variant='body1'>Name: {user.name}</Typography>
        <Typography variant='body1'>Email: {user.email}</Typography>
      </Box>
    </Paper>
  )
}

export default Sidebar
