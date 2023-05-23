import { useState, useEffect } from 'react'
import './Wrapper.css'
import { Title } from './Title'
import { Question } from './Question'


const user_id = 1
// responsesState = [{response: "xyz", index: ""}, {response: "abc", index: ""}]
export function Wrapper() {
  //const [questionNumber, setQuestionNumber] = useState(1)
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [responses, setResponses] = useState({})
  

  useEffect(() => {
    fetchQuestions()
  }, [])

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
    setResponses({ ...responses, [bias_index]: (responses[bias_index] || 0 )+points })
   
  }


 console.log(responses)
 if (questions.length==0){
  return null
 }

async function handleSubmit(responses,user_id) {
  const id = 1
  const response = await fetch(
      'http://127.0.0.1:8000/bias_test/api/submit-choice/',
      {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({responses:responses, user_id: user_id}),
      }
    )
    const json = await response.json()
    console.log(json)
    console.log("responses sent")
}



if (currentQuestionIndex <= 4) {
  return (
    <div>
      <Title />
      <Question
        questionData={questions[currentQuestionIndex]}
        current_index={currentQuestionIndex + 1}
        incrementQuestionNumber={incrementQuestionNumber}
        saveResponse={saveResponse}
      />
    </div>
  )
} else {
  handleSubmit(responses,user_id)
  return null
}


  
}

/*
  return (
    <div>
      <Title />
      <Question
        questionData={questions[questionNumber]}
        current_index={questionNumber}
        incrementQuestionNumber={() => setQuestionNumber(questionNumber + 1)}
      />
    </div>
  )
}
*/
