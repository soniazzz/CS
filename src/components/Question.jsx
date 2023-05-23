import './Question.css'
import { ChoiceBar } from './ChoiceBar'
export function Question(props) {
  const { questionData, current_index, incrementQuestionNumber, saveResponse } =
    props
  //const { index, question, description, choices } = questionData
  const { question, choices, index } = questionData
  const letterIndex = ['A', 'B', 'C', 'D']
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
