import { useState } from 'react'
import './Wrapper.css'
import { Title } from './Title'
import { Question } from './Question'

const questions = {
  1: {
    index: '1',
    question: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui repudiandae veritatis, eligendi corrupti officiis, iste omnis reprehenderit alias atque perferendis, praesentium amet velit quaerat enim minus dolores veniam illum assumend',
    choices: {
      1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      2: 'Lorem ipsum dolor sit amet consectetur.',
      3: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      4: 'Lorem ipsum dolor sit amet.',
    },
  },
  2: {
    index: '2',
    question: 'Some question?',
    description:
      'Some question description dolor sit, amet consectetur adipisicing elit. Qui repudiandae veritatis, eligendi corrupti officiis, iste omnis reprehenderit alias atque perferendis, praesentium amet velit quaerat enim minus dolores veniam illum assumend',
    choices: {
      1: '1111111111.',
      2: '22222222222',
      3: '3333333333',
      4: '444444444',
    },
  },
}

// responsesState = [{response: "xyz", index: ""}, {response: "abc", index: ""}]
export function Wrapper() {
  const [questionNumber, setQuestionNumber] = useState(1)

  return (
    <div>
      <Title />
      <Question
        questionData={questions[questionNumber]}
        current_index={questionNumber}
        incrementQuestionNumber={() => setQuestionNumber(questionNumber + 1)}
      />
    </div>
  )
}

