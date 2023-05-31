import React from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css'

export function MainPage({ user_id }) {
  console.log("MainPageNotWrapper"+user_id)
  return (
    <div className='main-page'>
      <header className='main-header'>
        <h1>My Home</h1>
        <nav>
          <Link to='/bias-test' className='take-test-link'>
            Bias Test
          </Link>
        </nav>
      </header>
    </div>
  )
}

