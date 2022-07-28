import React, { useEffect, useState } from 'react'
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
import { useNavigate } from "react-router-dom";
// import { SignalCellularNull } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Logocsi from "../../../Images/User/Logocsi.svg";

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
      <div className='feedback_main'>
      <div className="logo">
        <img src={Logocsi} alt="none" className="logocsi"/>
      </div>

        <div className="feedback_form">
          <div className='appbar'>FEEDBACK</div>
          <div className="questions_container">
            {ques.map((element, index) => {
              return (
                <FormControl className="questions">
                  <FormLabel className='ques'>{ques[index].question}</FormLabel>
                  <RadioGroup className='radio' name={index} onChange={handle}
                    row
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" key={element.id} />
                    <FormControlLabel value="2" control={<Radio />} label="2" key={element.id}/>
                    <FormControlLabel value="3" control={<Radio />} label="3" key={element.id}/>
                    <FormControlLabel value="4" control={<Radio />} label="4" key={element.id}/>
                    <FormControlLabel value="5" control={<Radio />} label="5" key={element.id}/>

                  </RadioGroup>

                </FormControl>
              )
            })}
            <div className='text-container' >
            <p>Your suggestions matter,drop us one!</p>
              <textarea 
                className='text'
                 type="text" 
                name={ques.length.toString()}
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