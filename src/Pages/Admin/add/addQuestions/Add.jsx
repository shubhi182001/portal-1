import React, { useState } from 'react'
import Ans from '../addQuestions/Ans'
import './add.css'
import Question from '../addQuestions/Question'

const Add = () => {
    
  return (
    <>
    <div className="add-questions-answers">
       <div className="ques-and-ans">
          <h3>Add a Question </h3>
        <div className="questions">
            <Question/>
        </div>
        <div className="dropdown">
            languages dropdown here
        </div>
        <div className="answers">
            <Ans/>
        </div>
       </div>
    </div>
    </>
  )
}

export default Add