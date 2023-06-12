import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Wrapper.css'
import { Title } from './Title'
import { Question } from './Question'
import QuestionContext from './QuestionContext'

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
  function saveResponse(bias_index, points) {
    setResponses({
      ...responses,
      [bias_index]: (responses[bias_index] || 0) + points,
    })
  }

  console.log(responses)
  if (questions.length == 0) {
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

  if (currentQuestionIndex <= 4) {
    return (
      <QuestionContext.Provider value={{ incrementQuestionNumber }}>
        <div>
          <Title />
          <Question
            questionData={questions[currentQuestionIndex]}
            current_index={currentQuestionIndex + 1}
            
            saveResponse={saveResponse}
          />
        </div>
      </QuestionContext.Provider>
    )
  } else {
    handleSubmit(responses, user_id)
    return null
  }
}

