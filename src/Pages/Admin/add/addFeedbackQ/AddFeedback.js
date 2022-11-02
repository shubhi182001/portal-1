import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './addfeedback.css'
import Navbar from '../../navbar/Navbar';


const AddFeedback = () => {

  const [feedback, setFeedback] = useState("");
  const [feedbackErrors, setFeedbackErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleFeedback = (e) => {
    e.preventDefault();
    setFeedback(e.target.value)

  }

  const handleReset = (e) => {
    e.preventDefault();
    setFeedback(' ');
  }

  const handleUpload = (e) => {
    e.preventDefault();
    setFeedbackErrors(validateFeedback(feedback))
    setIsSubmit(true)

    const questionFeedback = {
      "question": feedback
    }
    console.log(questionFeedback)
    if (questionFeedback && Object.keys(feedbackErrors).length === 0) {
      axios.post(`${process.env.REACT_APP_URL}/addfeedback`, questionFeedback)
        .then((res) => {
          // console.log(res)
          // console.log(res.data)
          setFeedback('')
          setFeedbackErrors({})
          if (res) {
            window.alert('Feedback question added successfully ')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log('Some kind of error');
    }

  }
  useEffect(() => {

    if (Object.keys(feedbackErrors).length === 0 && isSubmit) {
      console.log('Request Sent');
    }
  })
  const validateFeedback = (value) => {
    const err = {}
    if (!value) {
      err.x = 'Feedback Question is required'
    }
    return err;
  }

  return (
    <>
      <div className="f-feedback-main admin-main">
        <Navbar />

        <div className='f-add-feedback-body'>
          <h5 className='f-heading-feedback'>Add Feedback </h5>
          <div className='f-white-container'>
            <div className="f-feedback-ques">
              <p>Feedback</p>
              <textarea name="ques" value={feedback} required id="feedback-here" onChange={handleFeedback}></textarea>
              {(feedback.length === 0) ? <p style={{ color: "red" }}>{feedbackErrors.x}</p> : null}
            </div>

            <div className='f-add-feedback-buttons'>
              <div className="f-upload-button">
                <button onClick={handleUpload}>Upload</button>
              </div>
              <div className='f-reset-button'>
                <button onClick={handleReset}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddFeedback

