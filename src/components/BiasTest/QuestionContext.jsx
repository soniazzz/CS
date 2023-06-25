import { createContext } from 'react'

const QuestionContext = createContext({
  incrementQuestionNumber: () => {},
  saveResponse: () => {}
})

export default QuestionContext
