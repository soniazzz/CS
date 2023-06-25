import React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

export default function ProgressBar({ currentQuestionIndex, totalQuestions }) {
  const progress = (currentQuestionIndex / totalQuestions) * 100

  return (
    <Box width='100%' mt={4} sx={{ padding: '0 16px', marginBottom: '16px' }}>
      <LinearProgress
        variant='determinate'
        value={progress}
        sx={{
          height: '16px',
          borderRadius: '8px',
        }}
      />
    </Box>
  )
}
