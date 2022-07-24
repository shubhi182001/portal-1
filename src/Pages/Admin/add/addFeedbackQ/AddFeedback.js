import React, { useState } from 'react'
import axios from 'axios'
import './addfeedback.css'
import Navbar from '../../navbar/Navbar';


const AddFeedback = () => {

  const [feedback, setFeedback] = useState("");
  // setChosenlang(e.target.value)


  const handleFeedback = (e) => {
    e.preventDefault();
    setFeedback(e.target.value)
  }

  const handleReset = (e) => {
    console.log('handle reset')
    // setFeedback(' ');
  }

  const handleUpload = (e) => {
    e.preventDefault();
    console.log('Uploaded')

    const questionFeedback = {
      "question": feedback
    }
    console.log(questionFeedback)
    if (questionFeedback) {
      axios.post('https://csiportal.herokuapp.com/addfeedback', questionFeedback)
        .then((res) => {
          console.log(res)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log('Some kind of error');
    }

  }


  return (
    <>
      <Navbar />
      <div className="f-feedback-main">

        <div className='f-add-feedback-body'>
          <h5 className='f-heading-feedback'>Add Feedback </h5>
          <div className='f-white-container'>
            <div className="f-feedback-ques">
              <p>Feedback</p>
              <textarea name="ques" required id="feedback-here" onChange={handleFeedback}></textarea>
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

