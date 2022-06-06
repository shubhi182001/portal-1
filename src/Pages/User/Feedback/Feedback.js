import React, { useState } from 'react'
import './Feedback.css'
import { Button } from "@mui/material";
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import {Grid} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { SignalCellularNull } from '@mui/icons-material';

const Feedback = () => {
  const [ans, setAns] = useState([]);
  let que = [
    "How easy was to navigate through the website?",
    "How would you rate the questions based on their difficulty level?",
    "How responsive have we been to your queries or concerns about our event?",
    "Rate your overall experience.",

  ]
  const validateRadio = (data) => {
    let count = 0;
    for (let element of data) {
      if (parseInt(element) > 0) {
        count = count + 1;
      }
    }
    if (count == 4) {
      console.log("Send");
    }
    else {
      alert("Complete all fields");
    }


  }
  let data;
  const handle = (e) => {
    data = ans;
    data[e.target.name] = e.target.value;
    console.log(data);
  }
  const Submit = async (e) => {
    e.preventDefault();
    validateRadio(data);
  }
  return (
    <>
      <div className='main'>
        <div className="feedback_form">
          <div className='appbar'>Feedback</div>

          <div className="questions_container">
            {que.map((element, index) => {
              return (
                <FormControl className="questions">
                  <FormLabel ><strong>{element}</strong></FormLabel>
                  <RadioGroup className='radio' name={index} onChange={handle}
                    row
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />

                  </RadioGroup>

                </FormControl>
              )
            })}
            <div className='text-container'>
              <textarea placeholder="Write something..." className='text'/>

            </div>
            <div className="button">

              <Button id='btn' size="large" type="submit" variant="contained" onClick={Submit}><b className='btncolor'>Submit</b></Button>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Feedback