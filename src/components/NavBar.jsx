import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function NavBar() {
  const navItems = [
    { name: 'Bias Test', path: '/bias-test' },
    { name: 'Learning', path: '/learning' },
    { name: 'Discussion Forum', path: '/discussion-forum' },
  ]

  const menuItemStyle = {
    color: '#fff',
    '&:hover': { color: 'rgba(0, 0, 0, 0.87)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }
  }

  const { logout } = useAuth()

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
          <Button onClick={logout} sx={menuItemStyle}>Log Out</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}