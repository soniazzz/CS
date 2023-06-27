import React from 'react'
import { Box, Typography, Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function HotPost({ title, poster, postDate, numberOfReplies }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/discussion_forum/post`)
  }

  return (
    <Box onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Typography variant='h6' textAlign='left'>
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
        <Typography variant='h7' textAlign='right'>
          Last Repied by: {poster}
        </Typography>
      </Box>

      <hr style={{ margin: '8px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
    </Box>
  )
}
