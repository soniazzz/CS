import { PersonalInfo } from './PersonalInfo'
import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { HotPost } from './HotPost'
import { Card, CardContent, Typography, Button, Box } from '@mui/material'

export default function DiscussionForum() {
  const user_id = sessionStorage.getItem('session_token')
  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={4}>
          {/* Left Card - User Information */}
          <PersonalInfo user_id={user_id}></PersonalInfo>
          {/* Right Cards */}
          <Grid item xs={12} md={8}>
            {/* Upper Card - Navigation */}
            <Card sx={{ height: 150 }}>
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
                            height: '50px',
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
            <Box mt={4}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                  <Card sx={{ height: 550 }}>
                    <CardContent>
                      <Typography variant='h6' textAlign='left'>
                        Hot Posts
                      </Typography>
                      <hr
                        style={{
                          margin: '8px 0',
                          borderColor: 'rgba(0, 0, 0, 0.12)',
                        }}
                      />

                      {Array.from({ length: 4 }, (_, index) => (
                        <HotPost
                          key={index}
                          title={`Post Title ${index + 1}`}
                          poster={`User ${index + 1}`}
                          postDate={new Date()}
                          numberOfReplies={index * 10}
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
