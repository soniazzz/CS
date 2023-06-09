import React, { useState } from 'react'

export function ProfileEdit(props) {
   const user_id = props.user_id
   console.log(user_id)

  const [formData, setFormData] = useState({
    username: '',
    team: '',
    phone_number: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch(
      `http://127.0.0.1:8000/bias_test/api/edit-profile/${user_id}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      if (data.error && data.error === 'Username already exists.') {
        alert('Username already exists. Please choose another one.')
      } else {
        window.location.href = '/'
      }
    } else {
      alert('Error. Please try again.')
    }
  }

  return (
    <div>
      <h1>Edit Your Profile</h1>
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

        <label htmlFor='phone'>Phone:</label>
        <input
          type='tel'
          id='phone'
          name='phone_number'
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='team'>Team:</label>
        <input
          type='text'
          id='team'
          name='team'
          value={formData.team}
          onChange={handleChange}
          required
        />
        <br />

        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
