import React, { useEffect, useState } from "react";
import "./QuestionPannel.css";
import instlogo from "../../../../Images/User/inst_csilogo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QuestionPannel = ({
  testoptions,
  showques,
  testques,
  setChoice,
  choice,
  setShowques,
  setAnsid,
  show,
}) => {
  const [radioActive, setRadioActive] = useState(false); // selecting radio buttons
  let isVerified;

  const [select, setSelect] = useState(""); // option selected
  // const [qid, setQid] = useState(); // for question id
  const cook = localStorage.getItem("cookie");
  // const [mark, setMark] = useState(false);
  // const [next, setNext] = useState(true);
  const [oid, setOid] = useState("000");
  const [chosenlang, setChosenlang] = useState("");
  // const [selectOpt, setSecteOpt] = useState("");
  // const [question,setQuestion] = useState('');
  // useLayoutEffect(() =>{
  //   // setChoice(val);
  //   // setShowques(1);
  //   // setTestOptions(testques[showques-1].options);
  //   console.log(testoptions);
  // })
  // let optionarr =[1,2,3,4];
  // for (let i = 0; i <4; i++) {
  //   optionarr.push((testoptions[i].value));
  // }

  // const [select, setSelect] = useState("");
  const lang = {
    cookie_token: cook,
  };
  useEffect(() => {
    axios
      .post("https://csiportal.herokuapp.com/langselected", lang)
      .then((res) => {
        // console.log(res.data.lang);
        setChosenlang(res.data.lang);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  // selecting cataegory [html,css,]
  const handleactive = (val) => {
    setChoice(val);
    setShowques(1);
  };
  // useEffect(()=>{

  // },[testques]);

  // Mark for review
  const navigate = useNavigate();

  const Mark = async () => {
    if (showques < testques.length) {

      let qid = testques[showques - 1]._id;
      let question = testques[showques - 1].question;

      console.log(select);
      console.log(qid);
      console.log(oid);
      console.log(choice);
      console.log(question);

      const data = {
        cookie_token: cook,
        question: question,
        category: choice,
        userAnswer: oid,
        Qid: qid,
        ansid: 3,
      };
    
      await axios
        .put("https://csiportal.herokuapp.com/ans/answer", data)
        .then((res) => {
          console.log(res.data);
          isVerified=res.data.isVerified;
          if(isVerified === false)
          {
            localStorage.removeItem('instruct');
            localStorage.removeItem('login2');
            localStorage.removeItem('cookie');
            navigate('/')
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setRadioActive(false);
      setShowques(showques + 1);
      setOid('000');
      setSelect();
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
  };
  // Mark for review ended

//   let option_data ;
//  if(testoptions){ 
//    option_data = testoptions.filter((i)=>{
//     if(testques[showques - 1].selectOpt === i.value)
//       {return true;}
//        return false;
//   })}
//   console.log(option_data[0]);

  // const handleOption = (option) => {
  //   console.log('called handleOption');
  //   if (testques[showques - 1].selectOpt) {
  //     testques[showques - 1].selectOpt == option.value
  //       ? setRadioActive(true)
  //       : setRadioActive(false);
  //   }
  // };

  // save and next
  const Next = async () => {
    if (showques < testques.length) {
     

      let qid = testques[showques - 1]._id;
      let question = testques[showques - 1].question;

      
      console.log(select);
      console.log(qid);
      console.log(oid);
      console.log(choice);
      console.log(question);

      const data = {
        cookie_token: cook,
        question: question,
        category: choice,
        userAnswer: oid,
        Qid: qid,
        ansid: oid === '000' ? 5 : 1,
      };
      await axios
        .put("https://csiportal.herokuapp.com/ans/answer", data)
        .then((res) => {
          console.log(res.data);
          isVerified=res.data.isVerified;
          if(isVerified === false)
          {
            localStorage.removeItem('instruct');
            localStorage.removeItem('login2');
            localStorage.removeItem('cookie');
            navigate('/')
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setRadioActive(false);
      setShowques(showques + 1);
      setOid('000');
      setSelect();
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
    // console.log(cataegory);
  };

  return (
    <div className={show ? "Question_body2" : "Question_body1"}>
      <div className="wrap1">
        <div className={show ? "test_nav2" : "test_nav1"}>
          <div className="ques_logo">
            <img src={instlogo} alt="" />
          </div>
          <div className="head">
            <h2>CSI Test Portal</h2>
          </div>
        </div>

        <div className={show ? "divider2" : "divider1"}>
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
            {testoptions &&
              testoptions.map((option, index) => (
                <div
                  className={show ? "que_options2" : "que_options1"}
                  key={option.Oid}
                >
                  <input
                    type="radio"
                    defaultChecked={radioActive}
                    onClick={() => {
                      setSelect(option.value);
                      setOid(option.Oid);
                      // setAnsid(index);
                      select === option.value
                        ? setRadioActive(true)
                        : setRadioActive(false);
                    }}
                    value={option.value}
                    name="btn"
                  />

                  <label>{testques[showques - 1].options[index].value}</label>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={show ? "footer2" : "footer1"}>
        <div className="foot_btn">
          <button onClick={Mark} id="mfr">
            Mark for Review
          </button>
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
