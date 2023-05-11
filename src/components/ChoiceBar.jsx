import './ChoiceBar.css'

export function ChoiceBar(props) {
  //const { choice, onclick } = props
  const { question_index, choice_index, choice, incrementQuestionNumber} = props
 
  const onclick = () => {
    incrementQuestionNumber()

    alert('Choice Saved. ' + question_index.toString()+': '+choice_index.toString())
  }
  return (
    <div className='choiceBar'>
      <button onClick={onclick}>{choice}</button>
    </div>
  )
}
