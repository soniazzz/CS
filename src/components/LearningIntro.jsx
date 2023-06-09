import React from 'react'
import './LearningIntro.css'
import 'bootstrap/dist/css/bootstrap.css'

export function LearningIntro(props){
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
             width={1000}
           />
         </div>
         <>
           <link
             href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css'
             rel='stylesheet'
             id='bootstrap-css'
           />
           {/*---- Include the above in your HEAD tag  why--------*/}
           <div className='container'>
             <div className='panel panel-default'>
               <div className='panel-heading'>
                 <div className='clearfix'></div>
               </div>
               <div className='panel-body'>
                 <div className='media'>
                   <div className='media-left'>
                     <a href='https://corporatefinanceinstitute.com/resources/capital-markets/list-top-10-types-cognitive-bias/'>
                       <img
                         className='media-object'
                         src='https://cdn.corporatefinanceinstitute.com/assets/cognitive-bias-brain.jpg'
                         alt='Kurt'
                         width={300}
                       />
                     </a>
                   </div>
                   <div className='media-body'>
                     <h4 className='media-heading'>Lorem ipsum</h4>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vivamus nulla sapien, semper in sodales ac, rutrum at orci.
                     Maecenas vulputate nec tellus sit amet porttitor.
                     Suspendisse congue porta sagittis. Ut erat diam,
                     consectetur sed tempus id, sodales nec felis. Donec
                     sagittis nunc sapien, non consequat nunc ultrices non.
                     Aliquam accumsan ligula ante, non commodo risus sodales a.
                     Vestibulum facilisis, enim in porta fringilla, tortor
                     sapien congue purus, porta consectetur sem turpis vitae
                     mauris. Donec dapibus justo a elit semper, et scelerisque
                     mauris ullamcorper. Maecenas blandit arcu nec euismod
                     pellentesque. Fusce et imperdiet nisi, at suscipit sem.
                     Aliquam pulvinar risus id cursus elementum. Nulla elementum
                     placerat nibh, in dictum enim mollis non. Morbi vehicula
                     eget est et tristique. Aenean condimentum augue id congue
                     convallis. Phasellus congue non tellus nec pretium.
                     Maecenas eu vulputate lacus, eget feugiat odio.
                     <div className='clearfix' />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </>
       </div>
     </div>
   </div>
 )
}