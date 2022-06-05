import React, { useState } from 'react'
import Ans from './Ans'
import './add.css'
import Question from './Question'

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