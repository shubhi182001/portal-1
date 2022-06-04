import React, { useState } from 'react'
import Ans from './Ans'
import './add.css'

const Add = () => {
    
  return (
    <>
    <div className="add-questions-answers">
        <h1>Add a Question </h1>
        <div className="questions">
            <h4>questions section </h4>
        </div>
        <div className="dropdown">
            languages dropdown here
        </div>
        <div className="answers">
            <h4>answers section</h4>
            <Ans/>
        </div>
    </div>
    </>
  )
}

export default Add