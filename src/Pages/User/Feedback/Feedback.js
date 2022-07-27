import React, { useEffect, useState } from 'react'
import './Feedback.css'
import { Button } from "@mui/material";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Feedback = () => {
  let data = [];
  const [ans, setAns] = useState([]);
  const [ques, setQues] = useState([]);
  // const [appeare, setAppeare] = useState();
  // const [questions,setQuestions] = useState([]);
  // const [sugg, setSugg] = useState("");
  // const [route, setRoute] = useState(false);

 
  const validateRadio = (data) => {
    if (data.length === 0) {
      // alert("Complete all fields");
      toast.error('Complete all fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    let count = 0;
    for (let element of data) {    //for of loop : loops through the values of an iterable object
      if (parseInt(element) > 0) {
        count = count + 1;
      }
    }
    if (count === ques.length && (data[data.length - 1].length != 0)) {
      console.log("Send");
      // setRoute(true);
      // console.log(route);
      localStorage.setItem('feedback', true);
      navigate('/thankyou')
      localStorage.removeItem('login2', true);
      localStorage.removeItem('instruct', true);
      localStorage.removeItem('feedback', true);
    }
    else {
      toast.error('Complete all fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }


  }
  const handle = (e) => {
    data = ans;
    data[e.target.name] = e.target.value;
    console.log(data);
  }
  const Submit = async (e) => {
    e.preventDefault();
    validateRadio(data);    
  }
  const navigate = useNavigate();
  useEffect(() => {
     axios
      .get(
        "https://csiportal.herokuapp.com/feed/seefeedbackques",
        data
      )
      .then((res) => {
        console.log(res.data);
        setQues(res.data);
        // setQues(res.data);

      })
    let login = localStorage.getItem('feedback');
    if (login) {
      navigate('/thankyou')
    }

  }, []);
  return (
    <>
      <div className='main'>
        <div className="feedback_form">
          <div className='appbar'>Feedback</div>

          <div className="questions_container">
            {ques.map((element, index) => {
              return (
                <FormControl className="questions">
                  <FormLabel ><strong>{ques[index].question}</strong></FormLabel>
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
            <div className='text-container' >
            <p>Your suggestions matter,drop us one!</p>
              <textarea 
                className='text'
                 type="text" 
                name={ques.length}
                //  value = {sugg} 
                onChange={handle}></textarea>

            </div>
            <div className="button">

              <Button id='btn' size="large" type="submit" variant="contained" onClick={Submit}><b className='btncolor'>Submit</b></Button>
            </div>

          </div>

        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  )
}

export default Feedback