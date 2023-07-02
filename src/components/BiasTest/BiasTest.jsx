import { ArrowBack, QuizOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthProvider'
import ProgressBar from './ProgressBar'
import Question from './Question'
import QuestionContext from './QuestionContext'

export default function BiasTest() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [responses, setResponses] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { userID } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (userID) fetchQuestions()
  }, [])

  useEffect(() => {
    if (isSubmitted) {
      handleSubmit(responses, userID).then(() => {
        navigate('/bias-results')
      })
    }
  }, [isSubmitted])

  async function fetchQuestions() {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/bias_test/api/get-questions/',
        { method: 'GET' }
      )
      const data = await response.json()
      setQuestions(data)
    } catch (error) {
      console.error('Error fetching questions:', error)
    }
  }

  function incrementQuestionNumber() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  }

  function decrementQuestionNumberAndPoints() {
    const newCurrentQuestionIndex =
      currentQuestionIndex > 0 ? currentQuestionIndex - 1 : 0 //new state value for current question index
    setCurrentQuestionIndex(newCurrentQuestionIndex) //update state with new value
    var bias_index_to_decrement = questions[newCurrentQuestionIndex].index //get the bias index for the previous question

    //responses object = {"1": [1,2], "2": [2,1], "3": [1,2]}
    setResponses({
      ...responses,
      [bias_index_to_decrement]: responses.hasOwnProperty(
        bias_index_to_decrement
      ) && [...responses[bias_index_to_decrement].slice(0, -1)], //remove the points from the bias index points array
    })
  }

  function saveResponse(bias_index, points) {
    console.log('bias_index: ' + bias_index + ',points: ' + points)
    setResponses({
      ...responses,
      [bias_index]: responses.hasOwnProperty(bias_index)
        ? [...responses[bias_index], points]
        : [points], //responses object = {"1": [1], "2": [2,1]}
    })
  }

  if (questions.length === 0) {
    return null
  }

  async function handleSubmit(responses, userID) {
    console.log('responses: ' + JSON.stringify(responses))

    const aggregated_bias_points = Object.fromEntries(
      Object.entries(responses).map(([bias_index, points_arr]) => {
        return [bias_index, points_arr.reduce((acc, curr) => acc + curr)]
      })
    )

    console.log(
      'aggregated_bias_points: ' + JSON.stringify(aggregated_bias_points)
    )

    const response = await fetch(
      'http://127.0.0.1:8000/bias_test/api/submit-choice/',
      {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          responses: aggregated_bias_points,
          user_id: userID,
        }),
      }
    )
    console.log('responses sent')
  }

  if (currentQuestionIndex === questions.length && !isSubmitted)
    setIsSubmitted(true)

  return (
    <>
      {currentQuestionIndex < questions.length && (
        <QuestionContext.Provider
          value={{ incrementQuestionNumber, saveResponse }}
        >
          <Container>
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
                <QuizOutlined />
              </Avatar>

              <ProgressBar
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={10}
              />
              <IconButton
                onClick={decrementQuestionNumberAndPoints}
                disabled={currentQuestionIndex === 0}
                sx={{ marginBottom: '16px' }}
              >
                <ArrowBack />
              </IconButton>

              <Question
                questionData={questions[currentQuestionIndex]}
                current_index={currentQuestionIndex + 1}
              />
            </Box>
          </Container>
        </QuestionContext.Provider>
      )}
    </>
  )
}
