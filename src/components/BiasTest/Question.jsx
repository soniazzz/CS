/*import './Question.css'
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
}*/
import { ChoiceBar } from './ChoiceBar'
import React, { useContext } from 'react'
import QuestionContext from './QuestionContext'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export function Question(props) {
  const { questionData, current_index, saveResponse } = props
  const { question, choices, index } = questionData
  const letterIndex = ['A', 'B', 'C', 'D']
  const { incrementQuestionNumber } = useContext(QuestionContext)

  function onChoiceSelect(points) {
    saveResponse(index, points)
  }

  return (
    <Box className='questionBox'>
      <section>
        <Typography variant='h4' sx={{ mt: 3 }} fontWeight='bolder'>
          {'Question ' + current_index}
        </Typography>

        <Typography variant='h5' sx={{ mt: 4, mb: 3 }} fontWeight='bold'>
          {question}
        </Typography>




        {choices.map(({ option, points }, i) => (
          <div key={i}>
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
    </Box>
  )
}
