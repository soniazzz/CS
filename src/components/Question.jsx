import './Question.css'
import { ChoiceBar } from './ChoiceBar'
export function Question(props) {
  const { questionData, current_index, incrementQuestionNumber } = props
  const { index, question, description, choices } = questionData

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
        <h4>{'Question' + current_index}</h4>
        <h5>{question}</h5>
        <h6>{description}</h6>

        <ChoiceBar
          question_index={index}
          choice_index={1}
          choice={'A. ' + choices[1]}
          incrementQuestionNumber={incrementQuestionNumber}
          //onclick={click_action}
        />
        <br />
        <ChoiceBar
          question_index={index}
          choice_index={2}
          choice={'B. ' + choices[2]}
          incrementQuestionNumber={incrementQuestionNumber}
          //onclick={click_action}
        />
        <br />
        <ChoiceBar
          question_index={index}
          choice_index={3}
          choice={'C. ' + choices[3]}
          incrementQuestionNumber={incrementQuestionNumber}
          //onclick={click_action}
        />
        <br />
        <ChoiceBar
          question_index={index}
          choice_index={4}
          choice={'D. ' + choices[4]}
          incrementQuestionNumber={incrementQuestionNumber}
          //onclick={click_action}
        />
      </section>
    </div>
  )
}
