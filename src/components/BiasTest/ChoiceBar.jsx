import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import QuestionContext from './QuestionContext'

export function ChoiceBar(props) {
  const { bias_index, choice, points } = props
  const { incrementQuestionNumber, saveResponse } = useContext(QuestionContext)

  const onclick = () => {
    incrementQuestionNumber(bias_index, points)
    saveResponse(bias_index, points)
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