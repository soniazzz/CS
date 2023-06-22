import { MainPage } from './MainPage'
import { MainProfile } from './MainProfile'
import Footer from '../Footer.jsx'

export function MainPageWrapper(props) {
  const user_id = sessionStorage.getItem('session_token')
  console.log('UserID' + user_id)

  return (
    <MainPage user_id={user_id} logout={props.logout}>
      <main className='main-content'>
        <MainProfile user_id={user_id} onLogin={props.onLogin} />
      </main>
      <Footer />
    </MainPage>
  )
}
