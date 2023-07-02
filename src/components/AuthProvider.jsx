import { React, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  const [userID, setUserID] = useState(sessionStorage.getItem('session_token'))
  const navigate = useNavigate()

  // get the token from session storage
  // set the react state user id from session storage 
  // otherwise go to login page
    // set the session storage and also the react state user id
  // pass the user id in the react context to all the components using the hook we create useAuth()

  const login = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/bias_test/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.error && data.error === 'User does not exist.') {
          alert('User dose not exist. Please sign up for a new account.')
        } else if (data.error && data.error === 'Wrong password.') {
          alert('Wrong password.')
        } else {
          sessionStorage.setItem('session_token', data.user_id)
          console.log('userID from login function: ' + data.user_id)
          setUserID(data.user_id)
          navigate('/profile')
        }
      } else {
        alert('Error logging in. Please try again.')
      }
    } catch (error) {
      alert('Error logging out:', error)
    }

  }

  const logout = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/bias_test/api/logout/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: userID }),
        }
      )

      if (response.ok) {
        sessionStorage.removeItem('session_token')
        setUserID(null)
        console.log('user id is set to null now')
        navigate('/login')
      } else {
        console.error('Error logging out')
      }
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ userID, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}