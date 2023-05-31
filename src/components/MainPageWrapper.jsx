import './MainPageWrapper.css'
import { MainPage } from './MainPage'

export function MainPageWrapper({ user_id }) {
  return (
    <div>
      <MainPage user_id={user_id} />
    </div>
  )
}

