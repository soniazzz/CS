import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import QuestionContext from './QuestionContext'

export function ChoiceBar(props) {
  const { question_index, choice, onChoiceSelect } = props
  const { incrementQuestionNumber } = useContext(QuestionContext)

  const onclick = () => {
    incrementQuestionNumber()
    onChoiceSelect()
  }

  return (
    <Container component='main' maxWidth='md'>
      <Button
        onClick={onclick}
        variant='contained'
        color='primary'
        fullWidth
        sx={{ mt: 3 }}
      >
        {choice}
      </Button>
    </Container>
  )
}
/*import './ChoiceBar.css'
import React, { useContext } from 'react'
import QuestionContext from './QuestionContext'

export function ChoiceBar(props) {
  const { question_index, choice, onChoiceSelect} = props
  const { incrementQuestionNumber } = useContext(QuestionContext)

  const onclick = () => {
    incrementQuestionNumber()
    onChoiceSelect()
    
  }

  return (
    <div className='choiceBar'>
      <button onClick={onclick}>{choice}</button>
    </div>
  )
}
*/
