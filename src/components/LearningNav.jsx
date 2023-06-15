import React from 'react'
import './LearningIntro.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
export function LearningNav({ children }) {
  return (
    <div>
      <header className='main-header'>
          <Link to='/learning' className='take-test-link'>
            Latest Learning Materials
          </Link>
        <nav>
          <Link to='/gender-bias' className='take-test-link'>
            Gender Bias
          </Link>
          <Link to='/racial-bias' className='take-test-link'>
            Racial Bias
          </Link>
          <Link to='/age-bias' className='take-test-link'>
            Age Bias
          </Link>
          <Link to='/height-bias' className='take-test-link'>
            Height Bias
          </Link>
          <Link to='/affinity-bias' className='take-test-link'>
            Affinity Bias
          </Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
