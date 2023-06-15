import React from 'react'
import { Blog } from './Article/Blog'
import { MainPage } from './MainPage'
import { LearningNav} from './LearningNav'



export function LearningArticle(props) {
 const user_id=props
 return (
   <div>
     <LearningNav>
         <Blog></Blog>
     </LearningNav>
   </div>
 )
}