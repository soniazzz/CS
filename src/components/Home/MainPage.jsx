import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const navItems = [
  { name: 'Bias Test', path: '/bias-test' },
  { name: 'Learning', path: '/learning' },
  { name: 'Discussion Forum', path: '/discussion_forum' },
]

export function MainPage({ user_id, logout, children }) {
  console.log('MainPageNotWrapper' + user_id)

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Button
            to='/'
            variant='h6'
            component='div'
            sx={{
              color: '#fff',
              
              '&:hover': {
                color: 'rgba(0, 0, 0, 0.87)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            My Home
          </Button>
          <HomeIcon />
      
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: '#fff',
                  '&:hover': {
                    color: 'rgba(0, 0, 0, 0.87)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
            <Button
              onClick={logout}
              sx={{
                color: '#fff',

                '&:hover': {
                  color: 'rgba(0, 0, 0, 0.87)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Log Out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  )
}

/*
import React from 'react'
//import './MainPage.css'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, Box, Link} from '@mui/material'



export function MainPage({ user_id, logout, children }) {


  console.log('MainPageNotWrapper' + user_id)

  return (
    <div>
      <div className='main-page'>
        <header className='main-header'>
          <Link to='/' className='take-test-link'>
            My Home
          </Link>
          <nav>
            <Link to='/bias-test' className='take-test-link'>
              Bias Test
            </Link>
            <Link to='/learning' className='take-test-link'>
              Learning
            </Link>
            <Link to='/discussion_forum' className='take-test-link'>
              Discussion Forum
            </Link>
            <button className='logout' onClick={logout}>
              Log Out
            </button>
          </nav>
        </header>
      </div>
      {children}
    </div>
  )
}*/
