import React from 'react'
import './question.css'

const Question=()=>{
    return(
        <>
        <div className="question">
            <p>Question</p>
            <textarea name="ques" id="question-here" >the question comes here </textarea>
        </div>
        </>
    )
}

export default Question;