import React, {useEffect, useState} from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const [hours,setHours]= useState(2);
  const [minutes,setMinutes]= useState(59);
  const [seconds,setSeconds]= useState(59);
  var timer;
  useEffect((e)=>{
    // e.preventDefault();
    timer= setInterval(()=>{
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

    },1000)
    return ()=> clearInterval(timer);
  },[])
  return (
    <div className="Sidebar_body">
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

      <div className="text-wrapper">
        <div className="buttons">
          <button className="sidebar_button">1</button>
          <button className="sidebar_button">1</button>
          <button className="sidebar_button">1</button>
          <button className="sidebar_button">1</button>
          <button className="sidebar_button">1</button>
        </div>
        <button className="submit_button">Submit Test</button>
      </div>
    </div>
  );
};

export default Sidebar;
