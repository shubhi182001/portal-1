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

const Feedback = () => {
  let data=[];
  const [ans, setAns] = useState([]);
  const [ques,setQues]= useState([]);
  const [appeare,setAppeare] = useState(false);
  // const [questions,setQuestions] = useState([]);
  // const [sugg, setSugg] = useState("");
  // const [route, setRoute] = useState(false);

  let que = [
    // "How easy was to navigate through the website?",
    // "How would you rate the questions based on their difficulty level?",
    // "How responsive have we been to your queries or concerns about our event?",
    // "Rate your overall experience.",

  ]
  const validateRadio = (data) => {
    if(data.length === 0){
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
    if (count === que.length && (data[data.length-1].length!=0)) {
      console.log("Send");
      // setRoute(true);
      // console.log(route);
      localStorage.setItem('feedback', true);
      navigate('/thankyou')
      localStorage.removeItem('login', true);
      localStorage.removeItem('instruct', true);
      localStorage.removeItem('feedback', true);
    }
    else {
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
      navigate('/thankyou')

    }


  }
  // const validateSugg = (value)=>{
  //   if (value===""){
  //     window.alert("Please provide your valuable suggestion")
  //     setRoute(false);

  //   }
  //   else{
  //     setRoute(true);
  //     console.log(route);
      
  //   }
  // }
  // const validateroutes = (route)=>{
  //   if(route===true){
  //     localStorage.setItem('feedback', true);
  //     navigate('/thankyou')
  //     localStorage.removeItem('login', true);
  //     localStorage.removeItem('instruct', true);
  //     localStorage.removeItem('feedback', true);
  //   }
  // }
  const handle = (e) => {
    data = ans;
    data[e.target.name] = e.target.value;
    console.log(data);
  }
  const Submit = async (e) => {
    e.preventDefault();
    validateRadio(data);
    // has appeared to be set true here in api
    // validateSugg(sugg);
    // validateroutes(route);
    localStorage.setItem('feedback', true);
    localStorage.removeItem('login2');
    localStorage.removeItem('instruct');
    // localStorage.removeItem('feedback');
    localStorage.removeItem('testpage');
    localStorage.removeItem('cookie');
    localStorage.setItem('Appeared',true);
    setAppeare(true);
    await axios
        .get(
          "https://csiportal.herokuapp.com/feed/seefeedbackques",    
            
        )
        .then((res) => {
          console.log(res.data);
          // localStorage.setItem('Appeared',false); 
          setQuestions(res.data);
          console.log(questions);


        })
        // .catch((err)=>{
        //   console.log(err)
        // });
    // navigate('/thankyou')
  }
  const navigate = useNavigate();
  useEffect(()=>
    {
      axios
      .get(
        "https://csiportal.herokuapp.com/feed/seefeedbackques",
      data
      )
      .then((res) => {
        console.log(res.data);
        setQues(res.data);

      })
      let login = localStorage.getItem('feedback');
        if(login){
           navigate('/thankyou')
        }
        
    },[]);
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
              <textarea placeholder="Write something..."
               className='text' 
              //  type="text" 
               name = {que.length}
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