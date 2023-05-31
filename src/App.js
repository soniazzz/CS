import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPageWrapper } from './components/MainPageWrapper'
import { Biastest } from './components/Biastest'
import { BiasResult } from './components/BiasResult'
import { LoginPage } from './components/LoginPage'
import { SignupPage } from './components/SignUpPage'
import { useState } from 'react'



function App() {
  const [user_id, setUserId] = useState(null)

  function handleLogin(UserId){
    console.log("UserID"+UserId)
    setUserId(UserId)
    console.log(user_id)
    if (user_id==null){
      return false
    }
    else{
      return true
    }
  }


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPageWrapper user_id={user_id} />} />
        <Route path='/bias-test' element={<Biastest user_id={user_id} />} />
        <Route
          path='/bias-results'
          element={<BiasResult user_id={user_id} />}
        />
        <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
        <Route path='/signup' element={<SignupPage />} />
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
