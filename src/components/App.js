import './App.css'
import { React, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import BiasTest from './BiasTest/BiasTest'
import BiasResult from './BiasTest/BiasResult'
import LoginPage from './SignIn/LoginPage'
import SignupPage from './SignIn/SignUpPage'
import EditProfile from './Profile/EditProfile'
import MainProfile from './Profile/MainProfile'
import LearningIntro from './Learning/LearningIntro'
import LearningArticle from './Learning/LearningArticle'
import DiscussionForum from './Discussion_Forum/MainForum/DiscussionForum'
import AppContainer from './AppContainer'
import PostWrapper from './Discussion_Forum/OnePost/PostWrapper'
import PostOfType from './Discussion_Forum/PostOfType'

const post_index = 1

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppContainer />}>
          <Route path='profile' element={<MainProfile />} />
          <Route path='edit-profile' element={<EditProfile />} />
          <Route path='bias-test' element={<BiasTest />} />
          <Route path='bias-results' element={<BiasResult />} />
          <Route path='learning' element={<LearningIntro />} />
          <Route
            path='gender-bias'
            element={<LearningArticle bias_index={1} />}
          />
          <Route
            path='racial-bias'
            element={<LearningArticle bias_index={2} />}
          />
          <Route path='age-bias' element={<LearningArticle bias_index={3} />} />
          <Route
            path='height-bias'
            element={<LearningArticle bias_index={4} />}
          />
          <Route
            path='affinity-bias'
            element={<LearningArticle bias_index={5} />}
          />
          <Route path='discussion-forum' element={<DiscussionForum />} />
          <Route
            path='/discussion_forum/post'
            element={<PostWrapper post_index={post_index} />}
          />
          <Route
            path='/discussion_forum/General_Bias'
            element={<PostOfType />}
          />
          <Route
            path='/discussion_forum/Gender_Bias'
            element={<PostOfType />}
          />
          <Route path='/discussion_forum/Age_Bias' element={<PostOfType />} />
          <Route
            path='/discussion_forum/Racial_Bias'
            element={<PostOfType />}
          />
          <Route
            path='/discussion_forum/Affinity_Bias'
            element={<PostOfType />}
          />
          <Route
            path='/discussion_forum/Height_Bias'
            element={<PostOfType />}
          />
        </Route>
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}
