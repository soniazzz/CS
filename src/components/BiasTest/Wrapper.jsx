import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Question } from './Question'
import {ProgressBar} from './ProgressBar'
import QuestionContext from './QuestionContext'
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ArrowBack from '@mui/icons-material/ArrowBack'

// responsesState = [{response: "xyz", index: ""}, {response: "abc", index: ""}]
export function Wrapper({ user_id }) {
  //const [questionNumber, setQuestionNumber] = useState(1)
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [responses, setResponses] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetchQuestions()
  }, [])
  useEffect(() => {
    if (isSubmitted) {
      handleSubmit(responses, user_id).then(() => {
        navigate('/bias-results')
      })
    }
  }, [isSubmitted])

  async function fetchQuestions() {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/bias_test/api/get-questions/',
        {
          method: 'GET',
        }
      )
      const data = await response.json()
      //console.log(data)
      setQuestions(data)
    } catch (error) {
      console.error('Error fetching questions:', error)
    }
  }

  function incrementQuestionNumber() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  }
  function decrementQuestionNumber() {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
  }
  function saveResponse(bias_index, points) {
    setResponses({
      ...responses,
      [bias_index]: (responses[bias_index] || 0) + points,
    })
  }

  console.log(responses)
  if (questions.length === 0) {
    return null
  }

  async function handleSubmit(responses, user_id) {
    const response = await fetch(
      'http://127.0.0.1:8000/bias_test/api/submit-choice/',
      {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ responses: responses, user_id: user_id }),
      }
    )
    const json = await response.json()
    setIsSubmitted(true)
    console.log(json)
    console.log('responses sent')
  }

  if (currentQuestionIndex <= 9) {
    return (
      <QuestionContext.Provider value={{ incrementQuestionNumber }}>
        <div>
          <Box
            component='main'
            maxWidth='md'
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <QuizOutlinedIcon />
            </Avatar>

            <ProgressBar
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={10}
            />
            <IconButton
              onClick={decrementQuestionNumber}
              disabled={currentQuestionIndex === 0}
              sx={{ marginBottom: '16px' }}
            >
              <ArrowBack />
            </IconButton>

            <Question
              questionData={questions[currentQuestionIndex]}
              current_index={currentQuestionIndex + 1}
              saveResponse={saveResponse}
            />
          </Box>
        </div>
      </QuestionContext.Provider>
    )
  } else {
    handleSubmit(responses, user_id)
    return null
  }
}
