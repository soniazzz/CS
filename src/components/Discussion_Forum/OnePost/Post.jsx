import React, { useEffect, useState } from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { PostDetail } from './PostDetail'
import { Reply } from './Reply'

export function Post(props) {
  const post_index = props.post_index
  const [post, setPost] = useState({})
  const [replies, setReply] = useState([])
  console.log('the post index is' + post_index)


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/bias_test/api/one_post/${post_index}/`
        )
        const data = await response.json()
        setPost({
          ...data.post,
          postDate: new Date(data.post.postDate),
        })
        setReply(
          data.replies.map((reply) => ({
            ...reply,
            postDate: new Date(reply.postDate),
          })
          )
        )
      } catch (err) {
        console.error('Error fetching posts:', err)
      }
    }

    fetchPosts()

  }, [post_index])
  

  const renderReplies = (replies, isReply = false, level = 0) => {

    return replies.map((reply) => (
      <Box mb={2} key={reply.id}>
        <Reply reply={reply} isReply={isReply} post_index={post_index} level={level}/>
        {renderReplies(reply.replies, true, level+1)}
      </Box>
    ))
  }

  return (
    <div>
      {/**first post**/}
      <Card>
        <CardContent>
          <Box mb={5}>
            <PostDetail
              post_index={post_index}
              title={post.title}
              poster={post.poster}
              postDate={post.postDate}
              numberOfReplies={post.numberOfReplies}
              biasIndex={post.bias_index}
            />
          </Box>
          <Typography variant='h6' textAlign='left'>
            {post.details}
          </Typography>
        </CardContent>
      </Card>
      {/**reply**/}
      <Box mt={5}>{renderReplies(replies)}</Box>
    </div>
  )
}
