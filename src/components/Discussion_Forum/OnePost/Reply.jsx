import React, { useState } from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'
import { styled } from '@mui/system'
import { ReplyForm } from './ReplyForm'

const ReplyWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isReply',
})(({ theme, isReply }) => ({
  marginTop: theme.spacing(1),
  paddingLeft: isReply ? theme.spacing(4) : 0,
}))

const ReplyTitle = styled(Typography)({
  fontWeight: 500,
})

export function Reply({ reply, isReply = false,post_index }) {
  const [showReplyForm, setShowReplyForm] = useState(false)


  const handleReplyButtonClick = () => {
    setShowReplyForm((prevShow) => !prevShow)
  }
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
    alert('You have created a new reply.')
    
    setShowReplyForm(false)
    window.location.reload()
    
  }
  
  return (
    <ReplyWrapper isReply={isReply}>
      <Box display='flex' alignItems='flex-start'>
        <Avatar alt={reply.poster} src={reply.avatar} />
        <Box ml={2} flexGrow={1} textAlign='left'>
          <ReplyTitle variant='subtitle1'>
            {reply.title}
          </ReplyTitle>
          <Box mt={1} display='flex' justifyContent='space-between'>
            <Box>
              <Typography variant='body2'>
                Replied by {reply.poster + ' '} on{' '}
                {reply.postDate.toLocaleString()}
              </Typography>
            </Box>
            <Button
              variant='outlined'
              size='small'
              onClick={handleReplyButtonClick}
            >
              Reply
            </Button>
          </Box>

          <Typography variant='body1'>{reply.details}</Typography>

          <hr style={{ margin: '8px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
          {showReplyForm && (
            <ReplyForm
              postId={post_index}
              parentReply={reply.id}
              onSubmit={handleReplySubmit}
            />
          )}
          
        </Box>
      </Box>
    </ReplyWrapper>
  )
  }
