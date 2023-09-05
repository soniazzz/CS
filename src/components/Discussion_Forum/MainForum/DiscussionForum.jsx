import { AppBar, Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from '../../AuthProvider'
import { HotPost } from './HotPost'
import { PersonalInfo } from './PersonalInfo'

export default function DiscussionForum() {
  const { userID } = useAuth()
  const [allPosts, setAllPosts] = useState([])
  const biasIndex = 6

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
  }, [biasIndex])
  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={4}>
          {/* Left Card - User Information */}
          <PersonalInfo user_id={userID}></PersonalInfo>
          {/* Right Cards */}
          <Grid item xs={12} md={8}>
            {/* Upper Card - Navigation */}
            <Card sx={{ height: 165 }}>
              <AppBar position='static'>
                <Typography
                  variant='h5'
                  textAlign='left'
                  fontStyle='bold'
                  mt={1}
                  mb={1}
                  ml={2}
                >
                  Posts By Bias Type
                </Typography>
              </AppBar>
              <CardContent>
                <Grid container spacing={2}>
                  {[
                    'General',
                    'Gender',
                    'Racial',
                    'Age',
                    'Height',
                    'Affinity',
                  ].map((bias, index) => (
                    <Grid key={index} item xs={6} sm={4}>
                      <Button
                        component={RouterLink}
                        to={`/discussion_forum/${bias}_Bias`}
                        variant='contained'
                        color='primary'
                        sx={{
                          
                          width: '100%',
                        }}
                      >
                        {bias} Bias Posts
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
            {/* Bottom Card - Hot Posts */}
            <Box mt={3}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                  <Card sx={{ height: 543 }}>
                    <AppBar position='static'>
                      <Typography
                        variant='h5'
                        textAlign='left'
                        fontStyle='bold'
                        mt={1}
                        mb={1}
                        ml={2}
                      >
                        Hot Posts
                      </Typography>
                    </AppBar>
                    <CardContent>
                      {allPosts.map((post) => (
                        <HotPost
                          post_index={post.post_index}
                          title={post.title}
                          poster={post.poster}
                          postDate={post.postDate}
                          numberOfReplies={post.numberOfReplies}
                          bias_index={post.bias_index}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
