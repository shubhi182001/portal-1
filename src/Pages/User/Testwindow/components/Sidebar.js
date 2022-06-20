import React, {useEffect, useRef, useState} from "react";
import "./Sidebar.css";
import Modal from "./../../Modal/Modal";
const Sidebar = ({choice,testques, setShowques}) => {

  const [hours,setHours]= useState(2);
  const [minutes,setMinutes]= useState(59);
  const [seconds,setSeconds]= useState(59);
  const [show,setShow] =useState(false);
  let sidebarbtn = []
  for(let i = 1;i <= testques.length; i++)
  {
   sidebarbtn.push(i);
  }


  let interval = useRef();

  const startTimer = () => {
    interval = setInterval(() => {
           setSeconds(seconds-1);
           if(seconds===0){
             setMinutes(minutes-1);
             setSeconds(59);
           }
           if(minutes===0){
             setHours(hours-1);
             setMinutes(59);
             setSeconds(59);
           }
    }, 1000)

  };

  useEffect(() =>{
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  },[]);

  const Submit = (e) => {
    e.preventDefault();
    setShow(true);
    // console.log("modal");
    // {show && <Modal />}
  }


   
  return (<div className="Sidebar_body">
  <div className="part1">
  <div className="time_left">
    <h1>Time left</h1>
  </div>
  <div className="time_measure">
    <div className="time_counting2">
      <span className="time_num">{hours}</span>
      <span className="time_text">hours</span>
    </div>
    <div className="time_counting2">
      <span className="time_num">{minutes}</span>
      <span className="time_text">min</span>
    </div>
    <div className="time_counting2">
      <span className="time_num">{seconds}</span>
      <span className="time_text">sec</span>
    </div>
  </div>
    <div className="time_head">Questions</div>


    <div className="test_btn">
      {
        sidebarbtn.map((i) => (
          <button className="sidebar_button" onClick={() => setShowques(i)}>{i}</button>
        ))
      }
      
    </div>
    </div>
    <div className="side_footer">
    <button className="submit_button" onClick={Submit}>Submit Test</button>
    </div>
  </div>
  );
};

export default Sidebar;
