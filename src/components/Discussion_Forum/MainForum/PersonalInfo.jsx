import { AppBar, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Box
} from '@mui/material'



export function PersonalInfo(props) {

const navigate = useNavigate()
const user_id = props.user_id

const [results, setResults] = useState(null)
const [info, setInfo] = useState(null)

useEffect(() => {
  async function fetchResults() {
    try {
      const id = user_id === null ? 0 : user_id
      const response = await fetch(
        `http://127.0.0.1:8000/bias_test/api/get-profile/${id}`,
        {
          method: 'GET',
        }
      )
      console.log(response.status)
      if (response.status == 403) navigate('/login')
      const data = await response.json()

      setResults(data.data)
      setInfo(data.info)
    } catch (error) {
      console.error('Error fetching bias results:', error)
    }
  }

  fetchResults()
}, [user_id])

if (!results || !info) {
  return <div>Loading...</div>
}

console.log('here the user_id is'+user_id)

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: 732 }}>
        <AppBar position='static'>
          <Typography
            variant='h5'
            textAlign='left'
            fontStyle='bold'
            mt={1}
            mb={1}
            ml={2}
          >
            Profile
          </Typography>
        </AppBar>
        <CardContent>
          <Box display='flex' justifyContent='center' mt={3} mb={5}>
            <img
              src={info.avatar}
              alt='Admin'
              className='rounded-circle'
              width={150}
              height={150}
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Typography variant='h5' align='center' gutterBottom>
            {info.name}
          </Typography>
          <Typography variant='h6' align='center'>
            {'Team: ' + info.team}
          </Typography>

          <Box mt={2}>
            {Object.entries(results).map(([bias, possibility], index) => (
              <Box key={index} textAlign='left' mb={3.5}>
                <Typography variant='h7'>
                  {bias + '：' + possibility}
                </Typography>
                <LinearProgress
                  variant='determinate'
                  value={parseFloat(possibility)}
                />
              </Box>
            ))}
          </Box>

          <Box mt={5} display='flex' justifyContent='center'>
            <Button
              component={RouterLink}
              to='/discussion_forum/new_post'
              variant='contained'
              color='primary'
            >
              Add New Post
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
