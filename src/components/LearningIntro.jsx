import React from 'react'
import './LearningIntro.css'
import 'bootstrap/dist/css/bootstrap.css'
import {LearningIntroArticle} from './LearningIntroArticle'

export function LearningIntro(props){
  const a1h='material 1'
  const a1b='breif of material 1'
  const a1i='https://corporatefinanceinstitute.com/resources/capital-markets/list-top-10-types-cognitive-bias/'
  const a1l ='https://cdn.corporatefinanceinstitute.com/assets/cognitive-bias-brain.jpg'
  return (
   <div>
     <div class='row'>
       <div class='col-md-12'>
         <header className='main-header'>
           <div className='take-test-link'>Learning Platform</div>
         </header>
       </div>

       <div class='container'>
         <div class='col-md-12'>
           <img
             src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4gaGhZRGE3Qva8WOpIASCb/bad90ad977b1300fb46978f6093cdfbc/GettyImages-477723122.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=2&w=1000&h='
             alt='Admin'
             width={1050}
           />
         </div>
         <div class='col-md-12'>
          <LearningIntroArticle
            head={a1h}
            brief={a1b}
            img={a1i}
            link={a1l}
          />
         </div>
         
       </div>
     </div>
   </div>
 )
}