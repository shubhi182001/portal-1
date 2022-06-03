import React, { useState } from 'react'
import Ans from './Ans'

const Add = () => {
    
  return (
    <>
    <div className="add">
        <h1>Add a Question </h1>
        <div className="questions">
            <h4>questions section </h4>
        </div>
        <div className="dropdown">
            languages in this
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