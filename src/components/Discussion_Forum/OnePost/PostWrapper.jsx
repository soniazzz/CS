import React from 'react'
import { useParams } from 'react-router-dom'
import { Post } from './Post'
import { Box, Container } from '@mui/material'

export default function PostWrapper(props) {
  const { post_index } = useParams()
  return (
    <Container>
      <Box mt={4}>
        <Post post_index={post_index}></Post>
      </Box>
    </Container>
  )
}
