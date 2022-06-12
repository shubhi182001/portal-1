import React from "react";
import "./QuestionPannel.css";
import instlogo from "../../../../Images/User/inst_csilogo.png";

const QuestionPannel = () => {
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
          <h1>Question 1.</h1>
          <hr />
          <h2>What is your tech?</h2>
          <div className="que_options">
            <input type="radio" name="ans" value="" /> {" "}
            <label htmlFor="">React</label>
          </div>
          <div className="que_options">
            <input type="radio" name="ans" value="" /> {" "}
            <label htmlFor="">Flutter</label>
          </div>
          <div className="que_options">
            <input type="radio" name="ans" value="" /> {" "}
            <label htmlFor="">Kotlin</label>
          </div>
          <div className="que_options">
            <input type="radio" name="ans" value="" /> {" "}
            <label htmlFor="">Ai & Ml</label>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="foot_btn">
          <button id="mfr">Mark for Review</button>
          <button id="s_n">Save & Next</button>
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
