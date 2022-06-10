import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const [hours,setHours]= useState();
  const [minutes,setMinutes]= useState();
  const [seconds,setSeconds]= useState();
  return (
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
