import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { LearningIntroArticle } from './LearningIntroArticle'
import { MainPage } from '../Home/MainPage'
import { LearningNav } from './LearningNav'
import { useState, useEffect } from 'react'
import MainFeaturedPost from './Article/MainFeaturedPost.jsx'
import Footer from '../Footer.jsx'



export function LearningIntro(props) {
  const user_id = props
  

  const [articles, setArticles] = useState([])
  const [recommend, setRecommend] = useState([])


  useEffect(() => {
    fetchArticles()
  }, [])
  async function fetchArticles() {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/bias_test/api/get-articles/',
        {
          method: 'GET',
        }
      )
      const data = await response.json()
      
      setArticles(data.article)
      console.log(articles)
      setRecommend(data.recommend)
      console.log(recommend)
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
    link:recommend.link
  }

  return (
    <div>
      <MainPage user_id={user_id}>
        <div className='container'>
          <div className='row'>
            <div className='container'>
              <div className='col-md-12'>
                <MainFeaturedPost post={mainFeaturedPost} />
              </div>
            </div>
          </div>

          <LearningNav>
            <div>
              {articles.map((article) => (
                <div key={article.link}>
                  <LearningIntroArticle
                    type={article.bias_index}
                    head={article.head}
                    brief={article.brief}
                    img={article.img}
                    link={article.link}
                  />
                </div>
              ))}
            </div>
          </LearningNav>
        </div>
        <Footer></Footer>
      </MainPage>
    </div>
  )

}
