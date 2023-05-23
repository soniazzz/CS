import './ChoiceBar.css'

export function ChoiceBar(props) {
  //const { choice, onclick } = props
  const { question_index, choice_index, choice, incrementQuestionNumber} = props
 
const handleSubmit = (event) => {
    event.preventDefault()

    fetch('/api/submit-choice/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question_index: question_index,
        choice_index: choice_index,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }





  const onclick = () => {
    incrementQuestionNumber()
    const body = JSON.stringify({
        question_index: question_index,
        choice_index: choice_index,
      })
    console.log({body})
    fetch('http://127.0.0.1:8000/bias_test/api/submit-choice/', {
      method: 'POST',
      /*headers: {
        'Content-Type': 'application/json',
      },
      */
      body: body,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
    alert('Choice Saved. ' + question_index.toString()+': '+choice_index.toString())
  }
  return (
    <div className='choiceBar'>
      <button onClick={onclick}>{choice}</button>
    </div>
  )
}



/*
import React, { useState } from 'react';
import './ChoiceBar.css'
function ChoiceBar(props) {
  const { question_index, choice_index, choice, incrementQuestionNumber} = props


  const onclick = () => {
    incrementQuestionNumber()

    alert('Choice Saved. ' + question_index.toString()+': '+choice_index.toString())
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('/api/submit-choice/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question_index: question_index,
        choice_index: choice_index,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <div className='choiceBar'>
      <button onClick={onclick}>{choice}</button>
    </div>
  )
  
};
  
*/

