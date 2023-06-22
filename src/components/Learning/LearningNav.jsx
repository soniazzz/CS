import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Button, Link, Box } from '@mui/material'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'

export function LearningNav({ children }) {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Button
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
            <Link sx={{ color: '#fff' }} href='/learning'>
              Latest Learning Materials
            </Link>
          </Button>
          
          <LocalLibraryOutlinedIcon />

          <Box sx={{ flexGrow: 1 }} />
          <Box></Box>

          <Button
            component={RouterLink}
            to='/gender-bias'
            sx={{
              color: '#fff',
              '&:hover': {
                color: 'rgba(0, 0, 0, 0.87)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Gender Bias
          </Button>
          <Button
            component={RouterLink}
            to='/racial-bias'
            sx={{
              color: '#fff',
              '&:hover': {
                color: 'rgba(0, 0, 0, 0.87)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Racial Bias
          </Button>
          <Button
            component={RouterLink}
            to='/age-bias'
            sx={{
              color: '#fff',
              '&:hover': {
                color: 'rgba(0, 0, 0, 0.87)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Age Bias
          </Button>
          <Button
            component={RouterLink}
            to='/height-bias'
            sx={{
              color: '#fff',
              '&:hover': {
                color: 'rgba(0, 0, 0, 0.87)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Height Bias
          </Button>
          <Button
            component={RouterLink}
            to='/affinity-bias'
            sx={{
              color: '#fff',
              '&:hover': {
                color: 'rgba(0, 0, 0, 0.87)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Affinity Bias
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  )
}

/*import React from 'react'
import './LearningIntro.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
export function LearningNav({ children }) {
  return (
    <div>
      <header className='main-header'>
          <Link to='/learning' className='take-test-link'>
            Latest Learning Materials
          </Link>
        <nav>
          <Link to='/gender-bias' className='take-test-link'>
            Gender Bias
          </Link>
          <Link to='/racial-bias' className='take-test-link'>
            Racial Bias
          </Link>
          <Link to='/age-bias' className='take-test-link'>
            Age Bias
          </Link>
          <Link to='/height-bias' className='take-test-link'>
            Height Bias
          </Link>
          <Link to='/affinity-bias' className='take-test-link'>
            Affinity Bias
          </Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
*/
