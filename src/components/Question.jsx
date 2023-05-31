import './Question.css'
import { ChoiceBar } from './ChoiceBar'
import React, { useContext } from 'react'
import QuestionContext from './QuestionContext'

export function Question(props) {
  const { questionData, current_index, saveResponse } = props
  //const { index, question, description, choices } = questionData
  const { question, choices, index } = questionData
  const letterIndex = ['A', 'B', 'C', 'D']
  const { incrementQuestionNumber } = useContext(QuestionContext)
  function onChoiceSelect(points) {
    saveResponse(index, points)
  }
  

  /*const click_action = () => {
    incrementQuestionNumber()
    alert('Choice Saved')
  }
  */
  /*{choices.map((choice) => {
          return (
            <>
              <ChoiceBar choice={choice} onclick={click_action} />
              <br />
            </>
          )
        })}
        */

  return (
    <div className='questionBox'>
      <section>
        <h4>{'Question ' + current_index}</h4>
        <h5>{question}</h5>

        {choices.map(({ option, points }, i) => (
          <div>
            <ChoiceBar
              question_index={index}
              choice={letterIndex[i] + '. ' + option}
              onChoiceSelect={() => onChoiceSelect(points)}
              incrementQuestionNumber={incrementQuestionNumber}
            />
            <br />
          </div>
        ))}
      </section>
    </div>
  )
}
