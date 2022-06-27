import React from "react";
import Navbar from "../navbar/Navbar";
// import { Button } from "bootstrap";
import "./leaderboard.css";


function Leaderboard() {
  return (
    <>
      <Navbar />
      <div className="leader">
        <div className="top">Leaderboard </div>
      </div>
     
     <div className="inputwrap">
     <input className="wrap" type="text" placeholder="Search..."></input>
     </div>
      
      <div className="box3">
        <div className="content">
          <div className="details">
            <div className="information">
            <div className="info_ques">
            <ul>
                <li>Name</li>
                <li>Student no.</li>
                <li>Branch</li>
                <li>Score</li>
                <li>Start Time</li>
                <li>End Time</li>
                <div className="fetch">
                <div className="fetch_details">Fetch Details</div>
                </div>
            </ul>
            </div>
            <div className="info_ans">
            <ul>
                <li>Nate</li>
                <li>2010565</li>
                <li>CSE</li>
                <li>100</li>
                <li>10:00</li>
                <li>12:00</li>
                <div className="answers">
                <div className="fetch_answers">
                Fetch Answers</div>
                </div>
            </ul>
            </div>
           
            </div>
            </div>
        </div>
              
            </div>
          
      

      
    </>
  );
};

export default Leaderboard;