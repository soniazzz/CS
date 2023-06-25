import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

export default function MainProfile(props) {
  const user_id = props.user_id
  const navigate = useNavigate()
  const [results, setResults] = useState(null)
  const [info, setInfo] = useState(null)
  const [articles, setArticles] = useState(null)

  async function fetchResults() {
      try {
          const id = user_id === null ? 0 : user_id
          const response = await fetch(`http://127.0.0.1:8000/bias_test/api/get-profile/${id}`, {method: 'GET'})
          if (response.status === 403) navigate('/login')
          const data = await response.json()
          setResults(data.data)
          setInfo(data.info)
          setArticles(data.articles_list)
      } catch (error) {
          console.error('Error fetching bias results:', error)
      }
  }

  useEffect(() => {
      fetchResults()
  }, [user_id])

  if (!results || !info||!articles) {
      return <div>Loading...</div>
  }

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
