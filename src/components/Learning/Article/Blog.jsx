import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import MainFeaturedPost from './MainFeaturedPost.jsx'
import FeaturedPost from './FeaturedPost.jsx'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

import Footer from '../../Footer.jsx'

const defaultTheme = createTheme()

export function Blog(props) {
  const { bias_index } = props
  const [articles, setArticles] = useState([])
  const [recommend, setRecommend] = useState([])
  const [page, setPage] = useState(1)
  const [maxPages, setMaxPages] = useState(0)

  useEffect(() => {
    setPage(1)
    console.log(page)
    fetchArticles()
  }, [bias_index])


  useEffect(() => {
    fetchArticles()
  }, [page])

  async function fetchArticles() {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/bias_test/api/get-articles_of_type/${bias_index}/${page}`,
        {
          method: 'GET',
        }
      )
      const data = await response.json()
      setArticles(data.article)
      setRecommend(data.recommend)
      const totalPages = Math.ceil(data.total / 6)
      setMaxPages(totalPages)
    } catch (error) {
      console.error('Error fetching articles:', error)
    }
  }
  function handlePageChange(event, value) {
    setPage(value)
  }
  

  const mainFeaturedPost = {
    title: recommend.head,
    description: '',
    image: recommend.img,
    imageText: 'main image description',
    linkText: 'Continue reading…',
    link: recommend.link,
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {articles.map((post) => (
              <FeaturedPost key={post.head} post={post} />
            ))}
          </Grid>
          <br></br>
          <Box display='flex' justifyContent='center' marginTop={4}>
            <Pagination
              count={maxPages}
              page={page}
              onChange={handlePageChange}
              color='primary'
              size='large'
              showFirstButton
              showLastButton
            />
          </Box>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}