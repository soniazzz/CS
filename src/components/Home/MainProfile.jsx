/*import React from 'react'
import './MainProfile.css'
export function MainProfile(props) {
  const {name,team,phone}=props
  return (
    <div className='personal-profile'>
      <h2 className='profile-name'>Name:{name}</h2>
      <p className='profile-team'>Team: {team}</p>
      <p className='profile-phone'>Phone: {phone}</p> 
    </div>
  )
}
*/
/*
import './MainProfile.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function MainProfile(props) {
  const { user_id } = props
  console.log('MainProfile' + user_id)

  const [results, setResults] = useState(null)

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/bias_test/api/get-bias-results/${user_id}/`,
          {
            method: 'GET',
          }
        )
        const data = await response.json()
        setResults(data)
      } catch (error) {
        console.error('Error fetching bias results:', error)
      }
    }

    fetchResults()
  }, [user_id])

  if (!results) {
    return <div>Loading...</div>
  }

  return (
    <div className='personal-profile'>
      <table>
        <thead>
          <tr>
            <th>Bias Type</th>
            <th>Possibility</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(results).map(([bias, possibility], index) => (
            <tr key={index}>
              <td>{bias}</td>
              <td>{possibility.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
*/


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.css'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Link,
  LinearProgress,
  Box,
} from '@mui/material'

export function MainProfile(props) {
  const user_id = props.user_id
  const navigate = useNavigate()

  console.log('MainProfile' + user_id)

  const [results, setResults] = useState(null)
  const [info, setInfo] = useState(null)
  const [articles, setArticles] = useState(null)

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
        setArticles(data.articles_list)
        
      } catch (error) {
        console.error('Error fetching bias results:', error)
      }
    }

    fetchResults()
  }, [user_id])

  if (!results || !info||!articles) {
    return <div>Loading...</div>
  }
  console.log(articles)
  /*
  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 732 }}>
              <CardContent>
                <Grid container justifyContent='center'>
                  <img
                    src={info.avatar}
                    alt='Admin'
                    className='rounded-circle'
                    width={150}
                    height={150}
                  />
                </Grid>
                <Box mt={3} textAlign='center'>
                  <Typography variant='h5'>{info.name}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card sx={{ height: 350 }}>
              <CardContent>
                <Grid container alignItems='center' spacing={2}>
                  <Grid item xs={3}>
                    <Typography>Name</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color='text.secondary'>{info.name}</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <hr />
                  </Grid>

                  <Grid item xs={3}>
                    <Typography>Phone</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color='text.secondary'>{info.phone}</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <hr />
                  </Grid>

                  <Grid item xs={3}>
                    <Typography>Team</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color='text.secondary'>{info.team}</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <hr />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      component={RouterLink}
                      to='/edit-profile'
                      variant='contained'
                      color='info'
                    >
                      Edit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Box mt={4}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ height: 350 }}>
                    <CardContent>
                      <Typography variant='h6'>Bias Possibility</Typography>
                      <Box mt={2}>
                        {Object.entries(results).map(
                          ([bias, possibility], index) => (
                            <Box key={index} textAlign='left' mb={3.5}>
                              <Typography variant='caption'>
                                {bias + '：' + possibility}
                              </Typography>
                              
                              <LinearProgress
                                variant='determinate'
                                value={parseFloat(possibility)}
                              />
                            </Box>
                          )
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ height: 350 }}>
                    <CardContent>
                      <Typography variant='h6'>
                        Recommended Learning Materials
                      </Typography>
                      <Box mt={2} textAlign='left'>
                        {articles.map((article) => (
                          <Box key={article.link} mb={2}>
                            <Link href={article.link} underline='hover'>
                              <Typography variant='caption'>
                                {article.head}
                              </Typography>
                            </Link>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )*/
  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Card sx={{ display: 'flex', height: 350 }}>
              <Grid item xs={12} md={4}>
                <Grid container justifyContent='center'>
                  <img
                    src={info.avatar}
                    alt='Admin'
                    className='rounded-circle'
                    width={220}
                    height={220}
                  />
                </Grid>
                <Box mt={3} textAlign='center'>
                  <Typography variant='h4'>{info.name}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container alignItems='center' spacing={2}>
                  <Grid item xs={3}>
                    <Typography>Name</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color='text.secondary'>{info.name}</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <hr />
                  </Grid>

                  <Grid item xs={3}>
                    <Typography>Phone</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color='text.secondary'>{info.phone}</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <hr />
                  </Grid>

                  <Grid item xs={3}>
                    <Typography>Team</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color='text.secondary'>{info.team}</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <hr />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      component={RouterLink}
                      to='/edit-profile'
                      variant='contained'
                      color='info'
                    >
                      Edit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
            <Box mt={4}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ height: 350 }}>
                    <CardContent>
                      <Typography variant='h6'>Bias Possibility</Typography>
                      <Box mt={2}>
                        {Object.entries(results).map(
                          ([bias, possibility], index) => (
                            <Box key={index} textAlign='left' mb={3.5}>
                              <Typography variant='caption'>
                                {bias + '：' + possibility}
                              </Typography>

                              <LinearProgress
                                variant='determinate'
                                value={parseFloat(possibility)}
                              />
                            </Box>
                          )
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ height: 350 }}>
                    <CardContent>
                      <Typography variant='h6'>
                        Recommended Learning Materials
                      </Typography>
                      <Box mt={2} textAlign='left'>
                        {articles.map((article) => (
                          <Box key={article.link} mb={2}>
                            <Link href={article.link} underline='hover'>
                              <Typography variant='caption'>
                                {article.head}
                              </Typography>
                            </Link>
                          </Box>
                        ))}
                      </Box>
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
