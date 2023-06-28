import React from 'react'
import { Box, Typography, Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function HotPost(props) {
  const { post_index, title, poster, postDate, numberOfReplies, bias_index }=props
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/discussion_forum/post/${post_index}`)
  }
  let bias_type = ''
  if (bias_index === 1) {
    bias_type = 'Gender Bias'
  } else if (bias_index === 2) {
    bias_type = 'Racial Bias'
  } else if (bias_index === 3) {
    bias_type = 'Age Bias'
  } else if (bias_index === 4) {
    bias_type = 'Height Bias'
  } else if (bias_index === 5) {
    bias_type = 'Affinity Bias'
  }

  return (
    <Box onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Typography variant='h6' textAlign='left'>
        {title}
      </Typography>
      <Box mt={1} display='flex' justifyContent='space-between'>
        <Typography variant='h7' textAlign='left'>
          Bias Type: {bias_type}
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
