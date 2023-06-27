import React from 'react'
import { Box, Typography, Chip, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function PostDetail({ title, poster, postDate, numberOfReplies }) {
  const navigate = useNavigate()


  return (
    <Box>
      <Typography variant='h4' textAlign='left'>
        {title}
      </Typography>
      <Box mt={1} display='flex' justifyContent='space-between'>
        <Typography variant='h7' textAlign='left'>
          Bias Type: {'Gender Bias'}
        </Typography>
        <Box>
          <Typography variant='h7' textAlign='right'>
            Posted by: {poster + ' '}
          </Typography>
          <Typography variant='h7' textAlign='right'>
            {postDate.toLocaleDateString()}
          </Typography>
        </Box>
      </Box>

      <Box
        mt={1}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Chip
          label={`Replies: ${numberOfReplies}`}
          sx={{ mr: 0.5 }}
          color='primary'
          variant='outlined'
        />
        <Button variant='outlined' size='small'>
          Reply
        </Button>
      </Box>

      <hr style={{ margin: '8px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
    </Box>
  )
}
