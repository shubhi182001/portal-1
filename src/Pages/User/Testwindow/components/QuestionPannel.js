import React, { useEffect, useState } from "react";
import "./QuestionPannel.css";
import instlogo from "../../../../Images/User/inst_csilogo.png";
import { useContext } from "react";
import {contextapi} from "../../../../components/Context";
const QuestionPannel = () => 
{

  const {questions,name} = useContext(contextapi);
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [select,setSelect] = useState("");
 console.log(questions,name);
  let button =["1","2","3","4"]
 
 
  // const [options,setOptions] = useState([]);

  const Next =()=>{
    if(currentQuestion < 10){
      setCurrentQuestion(currentQuestion + 1);
    }
    else{
      setCurrentQuestion(0);

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
          <span id="divide1">HTML</span>
          <span>CSS</span>
          <span>SQL</span>
          <span>APTITUDE</span>
          <span id="divide5">C</span>
        </div>
        <div className="question_sec">
          <h1>Question {currentQuestion  + 1}.</h1>
          <hr />
          <h2>sdifjsldkfjsdkfj</h2>
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

              <b>{result}</b>
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
