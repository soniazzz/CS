import { ChoiceBar } from './ChoiceBar'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Question(props) {
  const { questionData, current_index } = props
  const { question, choices, index } = questionData
  const letterIndex = ['A', 'B', 'C', 'D']

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
            <ChoiceBar bias_index={index} choice={letterIndex[i] + '. ' + option} points={points}/>
            <br />
          </div>
        ))}
      </section>
    </Box>
  )
}
