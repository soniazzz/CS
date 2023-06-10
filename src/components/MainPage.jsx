import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

/*
export function MainPage({ user_id }) {
  console.log('MainPageNotWrapper' + user_id)
  return (
    <div class='navbar'>
      <a href='/bias-test'>Bias Test</a>
      <a href='/learning'>Learning</a>
      <a href='/Discussion'>Discussion</a>
    </div>
  )
}
*/

export function MainPage({ user_id, children }) {
  console.log('MainPageNotWrapper' + user_id);

  return (
    <div>
      <div className="main-page">
        <header className="main-header">
          <div className="take-test-link">My Home</div>
          <nav>
            <Link to="/bias-test" className="take-test-link">
              Bias Test
            </Link>
            <Link to="/learning" className="take-test-link">
              Learning
            </Link>
            <Link to="/discussion_forum" className="take-test-link">
              Discussion Forum
            </Link>
          </nav>
        </header>
      </div>
      {children}
    </div>
  );
}
