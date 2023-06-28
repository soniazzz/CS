import React, { useEffect, useState } from 'react'
import {
  CardContent,
  Grid,
  Card,
  Container,
  Box,
  Typography,
} from '@mui/material'
import { HotPost } from './MainForum/HotPost'
import Pagination from '@mui/material/Pagination'

export default function PostOfType(props) {
  const [page, setPage] = useState(1)
  const [allPosts, setAllPosts] = useState([])
  const biasIndex = props.bias_index 
  const handleChange = (event, value) => {
    setPage(value)
  }
  const postsPerPage = 5

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/bias_test/api/posts/${biasIndex}/`
        )
        const data = await response.json()
        setAllPosts(
          data.posts.map((post) => ({
            ...post,
            postDate: new Date(post.postDate),
          }))
        )
      } catch (err) {
        console.error('Error fetching posts:', err)
      }
    }

    fetchPosts()
  }, [page, biasIndex])
  console.log(allPosts)


  const displayedPosts = allPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  )

  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Typography variant='h6' textAlign='left'>
              All Posts
            </Typography>
            <hr
              style={{
                margin: '8px 0',
                borderColor: 'rgba(0, 0, 0, 0.12)',
              }}
            />

            {displayedPosts.map((post, index) => (
              <Box key={index} mb={2}>
                <Card>
                  <CardContent>
                    <HotPost
                      post_index={post.post_index}
                      title={post.title}
                      poster={post.poster}
                      postDate={post.postDate}
                      numberOfReplies={post.numberOfReplies}
                      bias_index={post.bias_index}
                    />
                  </CardContent>
                </Card>
              </Box>
            ))}
            <Box mt={4} display='flex' justifyContent='center'>
              <Pagination
                count={Math.ceil(allPosts.length / postsPerPage)}
                page={page}
                onChange={handleChange}
                color='primary'
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
