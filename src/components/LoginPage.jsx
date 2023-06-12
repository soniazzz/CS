import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpPage.css'

export function LoginPage(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        'http://127.0.0.1:8000/bias_test/api/authenticate-session',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_token: sessionStorage.getItem('session_token'),
          }),
        }
      )
      if (response.ok) navigate('/')
    }
    fn()
  }, [])

  /*const [Loading, setLoading] = useState(true)


  useEffect(() => {
    if (Loading) {
      alert("loading")
    }
  }, [Loading])
  */
  /*
  useEffect(() => {
    if (loginSuccessful) {
      navigate('/')
    }
  }, [loginSuccessful, navigate])
  */

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

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
        console.log(data.user_id)

        props.onLogin(data.user_id)
        navigate('/')

        /*
        while (props.checkLoad()===true){
          alert("Loading")
        }
        setLoginSuccessful(true)
        */
        /*
        if (props.onLogin(data.user_id)) {
          setLoginSuccessful(true)
        } else {
          alert('loading')
        }
        */
      }
    } else {
      alert('Error logging in. Please try again.')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type='submit'>Login</button>
      </form>
      <p>
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </p>
    </div>
  )
}
 