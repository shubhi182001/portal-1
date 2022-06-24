import React, { useState } from 'react'
// import '../addFeedbackQ/addfeedback'
import axios from 'axios'
import Navbar from '../../navbar/Navbar';


const AddFeedback = () => {
  
  const [feedback, setFeedback] = useState("");
  // setChosenlang(e.target.value)


  const handleFeedback = (e) => {
    e.preventDefault();
    setFeedback(e.target.value)
  }

  const handleReset=(e)=>{
    console.log('handle reset')
    // setFeedback(' ');
  }

  const handleUpload = (e) => {
    e.preventDefault();
    console.log('Uploaded')

    const questionFeedback={
      "question":feedback
    }
console.log(questionFeedback)
    if(questionFeedback){
      axios.post('https://csiportal.herokuapp.com/addfeedback',questionFeedback)
      .then((res)=>{
        console.log(res)
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }else{
      console.log('Some kind of error');
    }

  }


  return (
    <>
    <Navbar/>
      <div className="feedback-main">

        <div className='add-feedback-body'>
          <h5 className='heading-feedback'>Add Feedback </h5>
          <div className='white-container'>
            <div className="feedback">
              <p>Feedback</p>
              <textarea name="ques" required id="feedback-here" onChange={handleFeedback}></textarea>
            </div>

            <div className='add-feedback-buttons'>
              <div className="upload-button">
                <button onClick={handleUpload}>Upload</button>
              </div>
              <div className='reset-button'>
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

