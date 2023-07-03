import React, { useState } from 'react'
import { Box, TextField, Button, Container } from '@mui/material'

export function ReplyForm({ postId, parentReply, onSubmit }) {
  const [details, setDetails] = useState('')

  const handleSubmit = () => {
    console.log(postId, parentReply, details)
    onSubmit(postId, parentReply, details)
    setDetails('')
  }

  return (
    <Container>
      <Box component='form' onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          label='Write your reply here'
        />
        <Box display='flex' justifyContent='center'>
          <Button
            sx={{ mt: 2, mb: 3}}
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
