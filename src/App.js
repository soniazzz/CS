import logo from './logo.svg';
import './App.css';
import {MyButton} from './components/MyButton';
import {Title} from './components/Title';
import {Question} from './components/Question'

const question1 = {
  index: '1',
  question: 'Lorem ipsum dolor sit amet?',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui repudiandae veritatis, eligendi corrupti officiis, iste omnis reprehenderit alias atque perferendis, praesentium amet velit quaerat enim minus dolores veniam illum assumend',
  ChoiceA: 'A. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  ChoiceB: 'B. Lorem ipsum dolor sit amet consectetur.',
  ChoiceC: 'C. Lorem ipsum dolor sit amet, consectetur adipisicing.',
  ChoiceD: 'D. Lorem ipsum dolor sit amet.',
}


function App() {
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MyButton/>
    </div>
  );*/
  return (
    <div>
      <Title />
      <Question
        index={question1.index}
        question={question1.question}
        description={question1.description}
        ChoiceA={question1.ChoiceA}
        ChoiceB={question1.ChoiceB}
        ChoiceC={question1.ChoiceC}
        ChoiceD={question1.ChoiceD}
      />
    </div>
  )


}

export default App;
