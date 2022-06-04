import React, { useState } from 'react'
import './Feedback.css'
import {Button} from "@mui/material";
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
  const [valueq1,setValueq1]=useState(null);
  const [valueq2,setValueq2]=useState(null);
  const [valueq3,setValueq3]=useState(null);
  const [valueq4,setValueq4]=useState(null);
  
  let que = [
    "How easy was to navigate through the website?",
    "How would you rate the questions based on their difficulty level?",
    "How responsive have we been to your queries or concerns about our event?",
    "Rate your overall experience.",

  ]
  const validateRadio = (valueq1,valueq2,valueq3,valueq4) => {
    
    if( valueq1===null){
      window.alert("Select all the fields")
      console.log("a")
    }
    else if (valueq2===null){
      window.alert("Select all the fields")
      console.log("b")
    }
    else if (valueq3===null){
      window.alert("Select all the fields")
      console.log("c")
    }
    else if (valueq4===null){
      window.alert("Select all the fields")
      console.log("d")
    }
    else{
    
      console.log("send")
    }

    
  } 
  
  
  const Submit =async (e)=>{
    e.preventDefault();
    validateRadio(valueq1,valueq2,valueq3,valueq4);
    
  }
  
  
  return (
    <>
    <div className='main'>
    <div className="feedback_form">
      <div className='appbar'>Feedback</div>
      <div className="questions_container">
        <FormControl className="questions">
          <FormLabel ><strong>{que[0]}</strong></FormLabel>
          <RadioGroup className='radio' onChange={(e) => setValueq1(e.target.value)}
            row
          >
            <FormControlLabel value="1" control={<Radio />} label="1"  />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />

          </RadioGroup>
        </FormControl>
        <FormControl className="questions">
          <FormLabel ><strong>{que[1]}</strong></FormLabel>
          <RadioGroup className='radio' onChange={(e) => setValueq2(e.target.value)}
            row
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />

          </RadioGroup>
        </FormControl>
        <FormControl className="questions">
          <FormLabel ><strong>{que[2]}</strong></FormLabel>
          <RadioGroup className='radio' onChange={(e) => setValueq3(e.target.value)}
            row
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />

          </RadioGroup>
        </FormControl>
        <FormControl className="questions">
          <FormLabel ><strong>{que[3]}</strong></FormLabel>
          <RadioGroup className='radio'   onChange={(e) => setValueq4(e.target.value)}
            row
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />

          </RadioGroup>
        </FormControl>
        <div className= "button">

        <Button id='btn'  size="large" type="submit" variant="contained" onClick={Submit}><b className='btncolor'>Submit</b></Button>
        </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Feedback