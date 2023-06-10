import './MainPageWrapper.css';
import { MainPage } from './MainPage';
import { MainProfile } from './MainProfile';

export function MainPageWrapper(props) {
  const user_id = sessionStorage.getItem('session_token');
  console.log('UserID' + user_id);

  return (
    <div>
      <MainPage user_id={user_id} />
      <main className="main-content">
        <MainProfile user_id={user_id} onLogin={props.onLogin} />
      </main>
    </div>
  );
}
