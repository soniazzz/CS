import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
		  <Link color='inherit' href='https://github.com/soniazzz'>soniazzz's github</Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Footer() {
  return (
    <Box component='footer' sx={{ backgroundColor: 'background.paper', py: 6 }}>
      <Container maxWidth='lg'>
        <Copyright />
      </Container>
    </Box>
  )
}


