import React, { useEffect, useLayoutEffect, useState } from "react";
import "./QuestionPannel.css";
import instlogo from "../../../../Images/User/inst_csilogo.png";
import axios from "axios";
const QuestionPannel = ({
  testoptions,
  setTestOptions,
  showques,
  testques,
  setChoice,
  choice,
  setShowques,
  chosenlang,
}) => {
  const [qid, setQid] = useState(); // for question id
  const [select, setSelect] = useState(""); // for option selection
  const [mark, setMark] = useState(false); // mark for review
  const [category, setCategory] = useState("CSS"); // for getting cataegory from api
  const [next, setNext] = useState(true); // for next in api
  const [oid, setOid] = useState(); // option id

  const cook = localStorage.getItem("cookie");
  // useLayoutEffect(() =>{
  //     // setChoice(val);
  //     // setShowques(1);
  //     // setTestOptions(testques[showques-1].options);
  //     setOid(testques[showques - 1].options[select].Oid);
  //     // console.log(testoptions);
  //   },[]);
  // let optionarr =[1,2,3,4];
  // for (let i = 0; i <4; i++) {
  //   optionarr.push((testoptions[i].value));
  // }

  // const [select, setSelect] = useState("");

  // for option rendering
  let optionarr = [],
    x;
  if (testoptions) {
    x = testoptions.length;
  }
  for (let i = 1; i <= x; i++) {
    optionarr.push(i);
  }

  // selecting cataegory
  const handleactive = (val) => {
    setChoice(val);
    setShowques(1);
  };
  const Next = () => {
    if (showques < testques.length) {
      setShowques(showques + 1);
      setTestOptions(testques[showques - 1].options);
      setQid(testques[showques - 1]._id);
      setCategory(testques[showques - 1].category);
      // setOid(testques[showques - 1].options[select].Oid)
     console.log(select);
      console.log(showques);
      console.log(oid);
    } else {
      setShowques(1);
      setChoice(
        choice === "HTML"
          ? "SQL"
          : choice === "SQL"
          ? "CSS"
          : choice === "CSS"
          ? "APTITUDE"
          : choice === "APTITUDE"
          ? chosenlang
          : choice === chosenlang
          ? "HTML"
          : "HTML"
      );
    }
    // console.log(categor);
    const data = {
      cookie_token: cook,
      question: showques,
      category: category,
      userAnswer: oid,
      markRev: mark,
      saveNext: next,
      Qid: qid,
    };
    axios
      .put("https://csiportal.herokuapp.com/ans/answer", data)
      .then((res) => {
        console.log(res.data);
        setSelect(0);
      })
      .catch((err) => {
        console.log(err);
        setSelect(0);
      });
  };

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
          <button
            className={choice === "HTML" ? "selectedbtn" : "dividerbtn"}
            onClick={() => handleactive("HTML")}
            id="divide1"
          >
            HTML
          </button>
          <button
            className={choice === "SQL" ? "selectedbtn" : "dividerbtn"}
            onClick={() => handleactive("SQL")}
          >
            SQL
          </button>
          <button
            className={choice === "CSS" ? "selectedbtn" : "dividerbtn"}
            onClick={() => handleactive("CSS")}
          >
            CSS
          </button>
          <button
            className={choice === "APTITUDE" ? "selectedbtn" : "dividerbtn"}
            onClick={() => handleactive("APTITUDE")}
          >
            APTITUDE
          </button>
          <button
            className={choice === chosenlang ? "selectedbtn" : "dividerbtn"}
            onClick={() => handleactive(chosenlang)}
            id="divide5"
          >
            {chosenlang}
          </button>
        </div>
        <div className="question_sec">
          <h1>Question {showques}.</h1>
          <hr />
          <h2>{testques[showques - 1].question}</h2>
          <div className="testbtn">
            {optionarr.map((i, index) => (
              <div className="que_options" key={index}>
                <input
                  type="radio"
                  value={i}
                  onChange={(e) => {
                    setSelect(e.target.value);
                    {testoptions && setOid(testques[showques - 1].options[i - 1].Oid);}
                  }}
                  name="btn"
                />
                {testoptions && (
                  <label>{testques[showques - 1].options[i - 1].value}</label>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="foot_btn">
          <button id="mfr">Mark for Review</button>
          <button id="s_n" onClick={Next}>
            Save & Next
          </button>
        </div>
        <div className="colors">
          <div className="color_sel">
            <span id="color1"></span>
            <h2>UnAttempted</h2>
          </div>
          <div className="color_sel">
            <span id="color2"></span>
            <h2>Attempted</h2>
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
