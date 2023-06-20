/*import './Title.css'
export function Title(props) {
  const title = 'Bias Test'
  return <div className='title'>{title}</div>
}*/

import React from 'react'
import Typography from '@mui/material/Typography'
import { AppBar, Toolbar } from '@mui/material'

export function Title({ children }) {
  const title = 'Bias Test'
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h4'
            component='div'
            sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  )
}
/*
<Typography variant='h3' className='title'>
        {title}
      </Typography>
*/