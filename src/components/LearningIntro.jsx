import React from 'react'
import './LearningIntro.css'
import 'bootstrap/dist/css/bootstrap.css'
import { LearningIntroArticle } from './LearningIntroArticle'
import { MainPage } from './MainPage'
import {LearningNav} from './LearningNav'
import { useState, useEffect } from 'react'



export function LearningIntro(props) {
  const user_id = props
  
  const [articles, setArticles] = useState([])
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
      console.log(data)
      setArticles(data)
    } catch (error) {
      console.error('Error fetching articles:', error)
    }
  }

  return (
    <div>
      <MainPage user_id={user_id}>
        <div className='container'>
          <div className='row'>
            <div className='container'>
              <div className='col-md-12'>
                <img
                  src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4gaGhZRGE3Qva8WOpIASCb/bad90ad977b1300fb46978f6093cdfbc/GettyImages-477723122.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=2&w=1000&h='
                  alt='Admin'
                  width={1050}
                />
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
      </MainPage>
    </div>
  )

  /*
  return (
    <div>
      <MainPage user_id={user_id}>
        <div className='container'>
          <div className='row'>
            <div className='container'>
              <div className='col-md-12'>
                <img
                  src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4gaGhZRGE3Qva8WOpIASCb/bad90ad977b1300fb46978f6093cdfbc/GettyImages-477723122.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=2&w=1000&h='
                  alt='Admin'
                  width={1050}
                />
              </div>
            </div>

            
                <div className='row col-md-12'>
                  <LearningIntroArticle
                    type={a1t}
                    head={a1h}
                    brief={a1b}
                    img={a1i}
                    link={a1l}
                  />
                </div>
              


          </div>
        </div>
      </MainPage>
    </div>
  )
*/
}
