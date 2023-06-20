import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export function MyButton(props) {
  const [count, setCount] = useState(100)
  const [show, setShow] = useState(true)

  const onclick = () => {
    alert('button pressed')
    setCount(count + 100)
    setShow(!show)
  }

  return (
    <div>
      {show ? (
        <Typography variant='h4'>Shown</Typography>
      ) : (
        <Typography variant='h4'>Not shown</Typography>
      )}
      <Button onClick={onclick} variant='contained' color='primary'>
        {props.title + ' ' + count}
      </Button>
    </div>
  )
}
