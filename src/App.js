import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPageWrapper } from './components/MainPageWrapper'
import { Biastest } from './components/Biastest'
import { BiasResult } from './components/BiasResult'

const user_id = 1

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPageWrapper />} />
        <Route path='/bias-test' element={<Biastest user_id={user_id} />} />
        <Route path='/bias-results' element={<BiasResult user_id={user_id} />}/>
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
