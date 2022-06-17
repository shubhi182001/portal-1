import React from "react";
import Navbar from "../navbar/Navbar";
import "./leaderboard.css";


const Leaderboard = () => {
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
              
            </div>
          </div>
        </div>
        </div>
      
    </>
  );
};

export default Leaderboard;