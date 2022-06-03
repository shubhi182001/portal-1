import React from 'react'
import './Feedback.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TypoGraphy from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Feedback = () => {
  let que = [
    "How easy was to navigate through the website?",
    "How would you rate the questions based on their difficulty level?",
    "How responsive have we been to your queries or concerns about our event?",
    "Rate your overall experience.",

  ]

  return (
    <div className="feedback_form">
      <AppBar color="primary" position="static" className='appbar'>
        <Toolbar>
          <TypoGraphy variant="title"
            color="inherit"

          >
            Feedback
          </TypoGraphy>
        </Toolbar>
      </AppBar>
      <div className="questions_container">
        <FormControl className="questions">
          <FormLabel>{que[0]}</FormLabel>
          <RadioGroup
            row
          >
            <FormControlLabel value="1" control={<Radio />} label= {<span style={{ fontSize: '1.5rem' }}>1</span>} />
            <FormControlLabel value="2" control={<Radio />} label= {<span style={{ fontSize: '1.5rem' }}>1</span>} />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />

          </RadioGroup>
        </FormControl>
        <FormControl className="questions">
          <FormLabel>{que[1]}</FormLabel>
          <RadioGroup
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
          <FormLabel>{que[2]}</FormLabel>
          <RadioGroup
            row
          >
            <FormControlLabel  value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />

          </RadioGroup>
        </FormControl>
        <FormControl className="questions">
          <FormLabel>{que[3]}</FormLabel>
          <RadioGroup
            row
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />

          </RadioGroup>
        </FormControl>

        





      </div>
    </div>
  )
}

export default Feedback