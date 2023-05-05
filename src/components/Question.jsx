import './Question.css'
import {ChoiceBar} from './ChoiceBar'
export function Question(props) {
 
 const { index, question, description, ChoiceA, ChoiceB, ChoiceC, ChoiceD} = props
  return (
    <div className='questionBox'>
      <section>
        <h4>{'Question' + index}</h4>
        <h5>{question}</h5>
        <h6>{description}</h6>
        <ChoiceBar choice={ChoiceA}></ChoiceBar>
        <br />
        <ChoiceBar choice={ChoiceB}></ChoiceBar>
        <br />
        <ChoiceBar choice={ChoiceC}></ChoiceBar>
        <br />
        <ChoiceBar choice={ChoiceD}></ChoiceBar>
      </section>
    </div>
  ) 
}
