import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Button, Box } from '@mui/material'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'

const menuItemStyle = {
	color: '#fff',
	'&:hover': {color: 'rgba(0, 0, 0, 0.87)', backgroundColor: 'rgba(255, 255, 255, 0.9)'}
}

export default function LearningNav() {
  return (
      <AppBar position='static'>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Button component={RouterLink} sx={menuItemStyle} endIcon={<LocalLibraryOutlinedIcon />} to={'/learning'}>
            Latest Learning Materials
          </Button>
          <Box>
                <Button component={RouterLink} to='/gender-bias' sx={menuItemStyle}>Gender Bias</Button>
                <Button component={RouterLink} to='/racial-bias' sx={menuItemStyle}>Racial Bias</Button>
                <Button component={RouterLink} to='/age-bias' sx={menuItemStyle}>Age Bias</Button>
                <Button component={RouterLink} to='/height-bias' sx={menuItemStyle}>Height Bias</Button>
                <Button component={RouterLink} to='/affinity-bias' sx={menuItemStyle}>Affinity Bias</Button>
          </Box>
        </Toolbar>
      </AppBar>
  )
}