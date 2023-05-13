import './ChoiceBar.css'

export function ChoiceBar(props) {
  //const { choice, onclick } = props
  const { question_index, choice_index, choice, incrementQuestionNumber} = props
 
  const onclick = async () => {
    incrementQuestionNumber()

    const response = await fetch("http://127.0.0.1:8000/bias_test/api/submit-choice/", {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({question_index, choice_index})
    });
    const json = await response.json();
    console.log(json);
    alert('Choice Saved. ' + question_index.toString()+': '+choice_index.toString())
  }
  return (
    <div className='choiceBar'>
      <button onClick={onclick}>{choice}</button>
    </div>
  )
}
