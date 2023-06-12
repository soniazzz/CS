import React from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css'



export function MainPage({ user_id, logout, children }) {
  console.log('MainPageNotWrapper' + user_id)
 

  return (
    <div>
      <div className='main-page'>
        <header className='main-header'>
          <Link to='/' className='take-test-link'>
            My Home
          </Link>
          <nav>
            <Link to='/bias-test' className='take-test-link'>
              Bias Test
            </Link>
            <Link to='/learning' className='take-test-link'>
              Learning
            </Link>
            <Link to='/discussion_forum' className='take-test-link'>
              Discussion Forum
            </Link>
            <button className='logout' onClick={logout}>
              Log Out
            </button>
          </nav>
        </header>
      </div>
      {children}
    </div>
  )
}
