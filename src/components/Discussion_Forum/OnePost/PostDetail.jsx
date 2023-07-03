import React from 'react'
import { Box, Typography, Chip, Button } from '@mui/material'
import { useState } from 'react'
import { ReplyForm } from './ReplyForm'
import { Dialog, DialogTitle } from '@mui/material'

export function PostDetail(props) {
  const{
  post_index,
  title,
  poster,
  postDate,
  numberOfReplies,
  biasIndex,
} =props
const [showReplyForm, setShowReplyForm] = useState(false)

const handleReplySubmit = async (postId, parentReply, details) => {
  const posterId = sessionStorage.getItem('session_token')
  
  const response = await fetch(
    'http://127.0.0.1:8000/bias_test/api/create_reply/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post_id: postId,
        parent_reply: parentReply,
        poster_id: posterId,
        details: details,
      }),
    }
  
  )
  const data = await response.json()
  if (data.status === 'success') {
   
    alert('You have created a new reply.')
  } else {
    console.error('Error creating reply:', data.message)
  }

}

  

  console.log('here is the poster'+poster)

  let bias_type = ''
  if (biasIndex === 1) {
    bias_type = 'Gender Bias'
  } else if (biasIndex === 2) {
    bias_type = 'Racial Bias'
  } else if (biasIndex === 3) {
    bias_type = 'Age Bias'
  } else if (biasIndex === 4) {
    bias_type = 'Height Bias'
  } else if (biasIndex === 5) {
    bias_type = 'Affinity Bias'
  }

  return (
    <Box>
      <Typography variant='h4' textAlign='left'>
        {title}
      </Typography>
      <Box mt={1} display='flex' justifyContent='space-between'>
        <Typography variant='h7' textAlign='left'>
          Bias Type: {bias_type}
        </Typography>
        <Box>
          <Typography variant='h7' textAlign='right'>
            Posted by {poster + ' '}
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
        <Button
          variant='outlined'
          size='small'
          onClick={() => setShowReplyForm(true)}
        >
          Reply
        </Button>
        <Dialog
          open={showReplyForm}
          onClose={() => setShowReplyForm(false)}
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle>Write a reply</DialogTitle>
          <ReplyForm
            postId={post_index}
            parentReply={null}
            onSubmit={handleReplySubmit}
          />
        </Dialog>
      </Box>

      <hr style={{ margin: '8px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
    </Box>
  )
}
