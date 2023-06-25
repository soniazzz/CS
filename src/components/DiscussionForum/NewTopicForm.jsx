import React, { useState } from 'react'
import { Paper, TextField, Button } from '@mui/material'

const NewTopicForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(title)
    setTitle('')
  }

  return (
    <Paper component='form' onSubmit={handleSubmit} sx={{ padding: 2 }}>
      <TextField
        label='New Topic'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        sx={{ marginTop: 1 }}
      >
        Create Topic
      </Button>
    </Paper>
  )
}

export default NewTopicForm
