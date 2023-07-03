import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'
import { styled } from '@mui/system'

const ReplyWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isReply',
})(({ theme, isReply }) => ({
  marginTop: theme.spacing(1),
  paddingLeft: isReply ? theme.spacing(4) : 0,
}))

const ReplyTitle = styled(Typography)({
  fontWeight: 500,
})

export function Reply({ reply, isReply = false }){
  return (
    <ReplyWrapper isReply={isReply}>
      <Box display='flex' alignItems='flex-start'>
        <Avatar alt={reply.poster} src={reply.avatar} />
        <Box ml={2} flexGrow={1} textAlign='left'>
          <ReplyTitle variant='subtitle1'>
            {isReply ? 'Re: ' : ''}
            {reply.title}
          </ReplyTitle>
          <Box mt={1} display='flex' justifyContent='space-between'>
            <Box>
              <Typography variant='body2'>
                Replied by {reply.poster + ' '} on{' '}
                {reply.postDate.toLocaleString()}
              </Typography>
            </Box>
            <Button variant='outlined' size='small'>
              Reply
            </Button>
          </Box>

          <Typography variant='body1'>{reply.details}</Typography>

          <hr style={{ margin: '8px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
        </Box>
      </Box>
    </ReplyWrapper>
  )
}