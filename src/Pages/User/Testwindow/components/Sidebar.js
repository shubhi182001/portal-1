<<<<<<< HEAD
import React, { useState } from 'react'
import './Sidebar.css'
=======
import React from "react";
import "./Sidebar.css";
>>>>>>> 9b98a66294853178af39770bfd736be415e2a9d7
const Sidebar = () => {
  const [hours,setHours]= useState();
  const [minutes,setMinutes]= useState();
  const [seconds,setSeconds]= useState();
  return (
<<<<<<< HEAD
    <div className='Sidebar_body'>
      <div></div>
     <div className="time_left">Time left</div>
     <div className="time_section">11 : 00 : 00</div>
     <div className="heading">Questions</div>
     <div className="buttons_container">
       <div className="buttons">
         <button className='sidebar_button'>1</button>
         <button>1</button>
         <button>1</button>
         <button>1</button>
         <button>1</button>
         <button>1</button>
       </div>
       <button className='submit_button'>Submit Test</button>
     </div>
    </div>
  )
}
=======
    <div className="Sidebar_body">
      <div className="time_left">
        <h1>Time left</h1>
      </div>
      <div className="time_measure">
        <div className="time_counting2">
          <span className="time_num">11</span>
          <span className="time_text">hours</span>
        </div>
        <div className="time_counting2">
          <span className="time_num">11</span>
          <span className="time_text">min</span>
        </div>
        <div className="time_counting2">
          <span className="time_num">11</span>
          <span className="time_text">sec</span>
        </div>
      </div>
        <div className="time_head">Questions</div>
>>>>>>> 9b98a66294853178af39770bfd736be415e2a9d7

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
