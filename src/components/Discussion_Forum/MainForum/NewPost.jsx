import React, { useState } from 'react'
import {
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  OutlinedInput
} from '@mui/material'


export default function NewPost(props) {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [biasIndex, setBiasIndex] = useState('')
  

  async function handleSubmit() {
    const user_id = sessionStorage.getItem('session_token')
    const response = await fetch(
      'http://127.0.0.1:8000/bias_test/api/create_post/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bias_index: biasIndex,
          poster_id: user_id,
          post_title: title,
          post_details: details,
        }),
      }
    )

    const data = await response.json()
    if (data.status === 'success') {
      console.log('Post created successfully')
      setTitle('')
      setDetails('')
      setBiasIndex('')
    } else {
      console.error('Error creating post:', data.message)
    }
  }

  const handleChange = (event) => {
    setBiasIndex(event.target.value)
  }

  return (
    <Container>
      <Box>
        <Grid container spacing={2} mt={4}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label='Details'
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel >Bias Type</InputLabel>
              <Select
                label='Bias Type'
                value={biasIndex}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    label='Bias Type'
                    id='bias-type-label'
                    notched
                    fullWidth
                  />
                }
              >
                <MenuItem value={1}>Gender Bias</MenuItem>
                <MenuItem value={2}>Racial Bias</MenuItem>
                <MenuItem value={3}>Age Bias</MenuItem>
                <MenuItem value={4}>Height Bias</MenuItem>
                <MenuItem value={5}>Affinity Bias</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' justifyContent='center'>
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
