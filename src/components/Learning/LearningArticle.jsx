import React from 'react'
import { Blog } from './Article/Blog'
import { LearningNav } from './LearningNav'

export function LearningArticle(props) {
  const user_id = props.user_id
  const bias_index=props.bias_index
  return (
    <div>
      <LearningNav>
        <Blog bias_index={bias_index}></Blog>
      </LearningNav>
    </div>
  )
}
