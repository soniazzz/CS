import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

export default function NavBar({ children }) {
	const navItems = [
    { name: 'Bias Test', path: '/bias-test' },
    { name: 'Learning', path: '/learning' },
    { name: 'Discussion Forum', path: '/discussion-forum' },
  ]

  const menuItemStyle = {
    color: '#fff',
    '&:hover': {color: 'rgba(0, 0, 0, 0.87)', backgroundColor: 'rgba(255, 255, 255, 0.9)'}
  }

	const navigate = useNavigate()

	const handleLogout = async () => {
		const session_token = sessionStorage.getItem('session_token')

	    if (session_token) {
	      try {
	        const response = await fetch(
	          'http://127.0.0.1:8000/bias_test/api/logout/',
	          {
	            method: 'POST',
	            headers: {
	              'Content-Type': 'application/json',
	            },
	            body: JSON.stringify({ user_id: session_token }),
	          }
	        )

          if (response.ok) {
            sessionStorage.removeItem('session_token')
            navigate('/login')
          } else {
            console.error('Error logging out')
          }
	      } catch (error) {
	        console.error('Error logging out:', error)
	      }
	    }
	}

	return (
	  <AppBar position='static'>
	    <Toolbar>
	      <Button variant='h6' component={RouterLink} sx={menuItemStyle} to={"/profile"} endIcon={<HomeIcon />}>Home</Button>
	      <Box sx={{ flexGrow: 1 }} />
	      <Box>
	        {navItems.map((item) => (
	          <Button key={item.name} component={RouterLink} to={item.path} sx={menuItemStyle}>
	            {item.name}
	          </Button>
	        ))}
	        <Button onClick={handleLogout} sx={menuItemStyle}>Log Out</Button>
	      </Box>
	    </Toolbar>
	  </AppBar>
	)
}