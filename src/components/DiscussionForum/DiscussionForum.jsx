import React, { useState } from 'react'
import { Container, Grid, CssBaseline } from '@mui/material'
import Header from './Header'
import Footer from '../Footer.jsx'
import TopicList from './TopicList'
import NewTopicForm from './NewTopicForm'
import Sidebar from './Sidebar'

export default function DiscussionForum (){
  const [topics, setTopics] = useState([
    { id: 1, title: 'Example Topic 1' },
    { id: 2, title: 'Example Topic 2' },
  ])

  const handleNewTopic = (title) => {
    const newTopic = { id: Date.now(), title }
    setTopics([...topics, newTopic])
  }

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='lg' sx={{ marginTop: 4, marginBottom: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <NewTopicForm onSubmit={handleNewTopic} />
            <TopicList topics={topics} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar user={user} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
