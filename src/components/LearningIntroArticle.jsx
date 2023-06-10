export function LearningIntroArticle(props){
 const {head,brief,img,link} = props
 return (
   <>
     <link
       href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css'
       rel='stylesheet'
       id='bootstrap-css'
     />
     {/*---- Include the above in HEAD tag  why--------*/}
     <div className='container'>
       <div className='panel panel-default'>
         <div className='panel-heading'>
           <div className='clearfix'></div>
         </div>
         <div className='panel-body'>
           <div className='media'>
             <div className='media-left'>
               <a href={link}>
                 <img
                   className='media-object'
                   src={img}
                   alt='img'
                   width={300}
                 />
               </a>
             </div>
             <div className='media-body'>
               <h4 className='media-heading'>{head}</h4>
               {brief}
               <div className='clearfix' />
             </div>
           </div>
         </div>
       </div>
     </div>
   </>
 )
}