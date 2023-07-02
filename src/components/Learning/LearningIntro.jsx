import { Container, Grid } from '@mui/material'
import { React, useEffect, useState } from 'react'
import { useAuth } from '../AuthProvider'
import LearningIntroArticle from './LearningIntroArticle'
import LearningNav from './LearningNav'
import MainFeaturedPost from './MainFeaturedPost.jsx'

export default function LearningIntro() {
  const [articles, setArticles] = useState([])
  const [recommend, setRecommend] = useState([])
  const { userID } = useAuth()

  useEffect(() => {
    if (userID) fetchArticles()
  }, [])

  async function fetchArticles() {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/bias_test/api/get-articles/',
        {
          method: 'GET',
        }
      )
      if (response.status === 200) {
        const data = await response.json()
        setArticles(data.article)
        setRecommend(data.recommend)
      }
    } catch (error) {
      console.error('Error fetching articles:', error)
    }
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
    <Container>
      <MainFeaturedPost post={mainFeaturedPost} />
      <LearningNav />
      <Grid container spacing={3} mt={2}>
        {articles.map((article) => (
          <LearningIntroArticle
            key={article.link}
            head={article.head}
            brief={article.brief}
            img={article.img}
            link={article.link}
          />
        ))}
      </Grid>
    </Container>
  )
}
