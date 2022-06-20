import React, { useEffect, useState } from "react";
import "./QuestionPannel.css";
import instlogo from "../../../../Images/User/inst_csilogo.png";
const QuestionPannel = ({showques,testques, setChoice, choice, setShowques}) => 
{
  const [select,setSelect] = useState("");
  

  const handleactive =(val) =>{
    setChoice(val);
    setShowques(1);
  }
let button =['1','2','3','4']

  const Next =()=>{
    if(showques<testques.length){
      setShowques(showques+1);
    }
    else{
      setShowques(1);
      setChoice(choice === "HTML"? "SQL" : choice === "SQL" ? "CSS" :choice === "CSS" ? "APTITUDE" : choice === "APTITUDE"? "C++":choice === "C++"? "HTML":"HTML");
    }
  }

  return (
    <div className="Question_body">
      <div className="wrap1">
        <div className="test_nav">
          <div className="ques_logo">
            <img src={instlogo} alt="" />
          </div>
          <div className="head">
            <h2>CSI Test Portal</h2>
          </div>
        </div>

        <div className="divider">
          <button className={choice === "HTML" ? "selectedbtn" : "dividerbtn"} onClick={() =>  handleactive("HTML")}id="divide1">HTML</button>
          <button className={choice === "SQL" ? "selectedbtn" : "dividerbtn"} onClick={() =>  handleactive("SQL")} >SQL</button>
          <button className={choice === "CSS" ? "selectedbtn" : "dividerbtn"} onClick={() =>  handleactive("CSS")} >CSS</button>
          <button className={choice === "APTITUDE" ? "selectedbtn" : "dividerbtn"} onClick={() =>  handleactive("APTITUDE")} >APTITUDE</button>
          <button className={choice === "C++" ? "selectedbtn" : "dividerbtn"} onClick={() =>  handleactive("C++")} id="divide5">C++</button>
        </div>
        <div className="question_sec">
          <h1>Question {showques}.</h1>
          <hr />
          <h2>{testques[showques-1].question}</h2>
          {/* <div className="que_options">
            <input type="radio" name="ans" value="" />
            <label htmlFor="">s</label>
          </div>
          <div className="que_options">
            <input type="radio" name="ans" value="" />
            <label htmlFor="">s</label>
          </div>
          <div className="que_options">
            <input type="radio" name="ans" value="" />
            <label htmlFor="">s</label>
          </div>
          <div className="que_options">
            <input type="radio" name="ans" value="" />
            <label htmlFor="">f</label>
          </div> */}
          <div className="que_options">
            {button.map((result) =>(
              <>
              <input type="radio" className="que_options" value={result} name="btn" onChange={(e)=>setSelect(e.target.value)}/>

              <b></b>
              <br></br>
              </>
            ))}
          </div>

        </div>
      </div>
      <div className="footer">
        <div className="foot_btn">
          <button id="mfr">Mark for Review</button>
          <button id="s_n" onClick={Next}>Save & Next</button>
        </div>
        <div className="colors">
          <div className="color_sel">
            <span id="color1"></span>
            <h2>Attempted</h2>
          </div>
          <div className="color_sel">
            <span id="color2"></span>
            <h2>UnAttempted</h2>
          </div>
          <div className="color_sel">
            <span id="color3"></span>
            <h2>Marked for Review</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPannel;
