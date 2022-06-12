import React, {useEffect, useRef, useState} from "react";
import "./Sidebar.css";
const Sidebar = () => {
  // const [hours,setHours]= useState(2);
  // const [minutes,setMinutes]= useState(59);
  // const [seconds,setSeconds]= useState(59);
  

  // var timer;
  // useEffect(()=>{
    
  //   timer= setInterval(()=>{
  //     localStorage.setItem("hours",hours);
  //     localStorage.setItem("minutes",minutes);
  //     localStorage.setItem("seconds",seconds);
  //          setSeconds(seconds-1);
  //          if(seconds===0){
  //            setMinutes(minutes-1);
  //            setSeconds(59);
  //          }
  //          if(minutes===0){
  //            setHours(hours-1);
  //            setMinutes(59);
  //            setSeconds(59);
  //          }
           

  //   },1000)
  //   return ()=> clearInterval(timer);
  // },)


 const [hours,setHours]= useState(2);
  const [minutes,setMinutes]= useState(59);
  const [seconds,setSeconds]= useState(59);
  

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
  });


   
  return (
    <div className="Sidebar_body">
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
          <button className="sidebar_button">1</button>
          <button className="sidebar_button">1</button>
          <button className="sidebar_button">1</button>
          <button className="sidebar_button">1</button>
          
        </div>
        </div>
        <div className="side_footer">
        <button className="submit_button">Submit Test</button>
        </div>
      </div>
  );
};

export default Sidebar;
