import React from 'react'
import { List, ListItem, ListItemText, Divider } from '@mui/material'

const TopicList = ({ topics }) => {
  return (
    <List>
      {topics.map((topic, index) => (
        <React.Fragment key={topic.id}>
          <ListItem button>
            <ListItemText primary={topic.title} />
          </ListItem>
          {index < topics.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  )
}

export default TopicList
