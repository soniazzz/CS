import './MainPageWrapper.css'
import { MainPage } from './MainPage'
import { MainProfile } from './MainProfile'




export function MainPageWrapper(props) {
  const user_id=props.user_id
  console.log('UserID' + user_id)
 
  if (user_id==null){
    console.log('UserID' + user_id)
    return(
      <div>
        <h1>Loading.</h1>
      </div>
    )
  }


  return (
    <div>
      <MainPage user_id={user_id} />
      <main className='main-content'>
        <MainProfile user_id={user_id} onLogin={props.onLogin}/>
      </main>
    </div>
  )
}
