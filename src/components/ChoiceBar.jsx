import './ChoiceBar.css'
export function ChoiceBar(props) {
  const { choice } = props
  const onclick = () => {
    alert('Choice Saved')
  }

  return (
    <div className='choiceBar'>
      <button onClick={onclick}>{choice}</button>
    </div>
  )
}
