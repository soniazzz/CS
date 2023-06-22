import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPageWrapper } from './components/Home/MainPageWrapper'
import { Biastest } from './components/BiasTest/Biastest'
import { BiasResult } from './components/BiasTest/BiasResult'
import { LoginPage } from './components/SignIn/LoginPage'
import { SignupPage } from './components/SignIn/SignUpPage'
import { ProfileEdit } from './components/Home/ProfileEdit'
import { LearningIntro } from './components/Learning/LearningIntro'
import { LearningArticle } from './components/Learning/LearningArticle'
import { useNavigate } from 'react-router-dom'
import { DiscussionForum } from './components/Discussion_Forum/DiscussionForum'

function App() {
  const user_id = sessionStorage.getItem('session_token')
  const navigate = useNavigate()

  /*
  function handleLogin(UserId) {
    console.log('UserID' + UserId)
    setUserId(UserId)
    console.log(user_id)
  }
  function checkLoad() {
    if (user_id == null) {
      return false
    } else {
      return true
    }
  }
  */

  function handleLogin(UserId) {
    sessionStorage.setItem('session_token', UserId)

    console.log('UserIDnew' + user_id)
  }

  async function handleLogout() {
    const session_token = sessionStorage.getItem('session_token')

    if (session_token) {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/bias_test/api/logout/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: session_token }),
          }
        )

        if (response.ok) {
          sessionStorage.removeItem('session_token')
          navigate('/login')
        } else {
          console.error('Error logging out')
        }
      } catch (error) {
        console.error('Error logging out:', error)
      }
    }
  }
  /*
    if (user_id==null){
      return false
    }
    else{
      return true
    }
    
}*/

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <MainPageWrapper onLogin={handleLogin} logout={handleLogout} />
          }
        />
        <Route path='/bias-test' element={<Biastest user_id={user_id} />} />
        <Route
          path='/bias-results'
          element={<BiasResult user_id={user_id} />}
        />
        <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route
          path='/edit-profile'
          element={<ProfileEdit user_id={user_id} />}
        />
        <Route path='/learning' element={<LearningIntro user_id={user_id} />} />
        <Route
          path='/gender-bias'
          element={<LearningArticle user_id={user_id} bias_index={1} />}
        />
        <Route
          path='/racial-bias'
          element={<LearningArticle user_id={user_id} bias_index={2} />}
        />
        <Route
          path='/age-bias'
          element={<LearningArticle user_id={user_id} bias_index={3} />}
        />
        <Route
          path='/height-bias'
          element={<LearningArticle user_id={user_id} bias_index={4} />}
        />
        <Route
          path='/affinity-bias'
          element={<LearningArticle user_id={user_id} bias_index={5} />}
        />
        <Route path='/discussion_forum' element={<DiscussionForum />} />
      </Routes>
    </div>
  )
}

export default App

/*import './App.css'
import { Wrapper } from './components/Wrapper'

function App() {
  return (
    <div>
      <Wrapper />
    </div>
  )
}

export default App
*/

/*
import './App.css'
import { MainPage } from './components/MainPage'

function App() {
  return (
    <div>
      <MainPage />
    </div>
  )
}

export default App
*/
