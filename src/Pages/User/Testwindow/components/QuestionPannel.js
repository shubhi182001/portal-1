import React, { useEffect, useState } from "react";
import "./QuestionPannel.css";
import instlogo from "../../../../Images/User/inst_csilogo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import { useStateContext } from "../../../../Components/ContextProvider";
import Loader from "../../../../Components/Loader/Loader";
const QuestionPannel = ({
  testoptions,
  showques,
  testques,
  setChoice,
  choice,
  setShowques,
  show,
}) => {
  const { loader, oid, setOid } = useStateContext();
  let isVerified;

  const cook = localStorage.getItem("cookie");

  const [chosenlang, setChosenlang] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  useEffect(() => {
    const lang = {
      cookie_token: cook,
    };
    axios
      .post("https://accessfre.herokuapp.com/langselected", lang)
      .then((res) => {
        setChosenlang(res.data.lang);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cook]);

  const saveCall = (data) => {
    setLoading(true);
    axios
      .put("https://accessfre.herokuapp.com/ans/set-answer", data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        isVerified = res.data.isVerified;
        if (isVerified === false) {
          localStorage.removeItem("instruct");
          localStorage.removeItem("login2");
          localStorage.removeItem("cookie");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const markCall = (data) => {
    setLoading1(true);
    axios
      .put("https://accessfre.herokuapp.com/ans/set-answer", data)
      .then((res) => {
        console.log(res.data);
        setLoading1(false);
        isVerified = res.data.isVerified;
        if (isVerified === false) {
          localStorage.removeItem("instruct");
          localStorage.removeItem("login2");
          localStorage.removeItem("cookie");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleactive = (val) => {
    setChoice(val);
    setShowques(1);
  };

  const navigate = useNavigate();

  // Mark for review
  const Mark = async () => {
    if (showques < testques.length && oid !== "000") {
      let qid = testques[showques - 1]._id;
      let question = testques[showques - 1].question;

      const data = {
        cookie_token: cook,
        question: question,
        category: choice,
        userAnswer: oid,
        Qid: qid,
        ansid: 3,
      };
    console.log(data);

      markCall(data);
      setShowques(showques + 1);
      setOid("000");
    } else if (
      showques < testques.length &&
      oid === "000" &&
      testques[showques - 1].userAnswer !== -1
    ) {
      let qid = testques[showques - 1]._id;
      let question = testques[showques - 1].question;
      let Options = testques[showques - 1].options;
      let selectedOpt = testques[showques - 1].userAnswer;

      let OptionId;

      OptionId = Options.filter((option) => option.Oid === selectedOpt);

      const data = {
        cookie_token: cook,
        question: question,
        category: choice,
        userAnswer: OptionId[0].Oid,
        Qid: qid,
        ansid: 3,
      };
      console.log(data);

      markCall(data);

      setShowques(showques + 1);

      setOid("000");
    } else if (oid === "000" && testques[showques - 1].userAnswer === -1) {
      toast.error("Select an option");
    } else {
      let qid = testques[showques - 1]._id;
      let question = testques[showques - 1].question;
      let data, OptionId;
      if (testques[showques - 1].userAnswer !== -1 && oid === "000") {
        OptionId = testques[showques - 1].options.filter(
          (option) => option.Oid === testques[showques - 1].userAnswer
        );
        data = {
          cookie_token: cook,
          question: question,
          category: choice,
          userAnswer: OptionId[0].Oid,
          Qid: qid,
          ansid: 3,
        };
      } else if (testques[showques - 1].userAnswer !== -1 && oid !== "000") {
        data = {
          cookie_token: cook,
          question: question,
          category: choice,
          userAnswer: oid,
          Qid: qid,
          ansid: 3,
        };
      }
    console.log(data);


      markCall(data);

      setOid("000");
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

  // save and next
  const Next = async () => {
    if (showques < testques.length) {
      if (oid !== "000") {
        let qid = testques[showques - 1]._id;
        let question = testques[showques - 1].question;
        const data = {
          cookie_token: cook,
          question: question,
          category: choice,
          userAnswer: oid,
          Qid: qid,
          ansid: 1,
        };
        console.log(data);

        saveCall(data);

        setShowques(showques + 1);

        setOid("000");
      } else if (oid === "000") {
        if (
          testques[showques - 1].userAnswer !== -1 &&
          testques[showques - 1].ansid === 3
        ) {
          let qid = testques[showques - 1]._id;
          let question = testques[showques - 1].question;
          let data, OptionId;
          OptionId = testques[showques - 1].options.filter(
            (option) => option.Oid === testques[showques - 1].userAnswer
          );
          data = {
            cookie_token: cook,
            question: question,
            category: choice,
            userAnswer: OptionId[0].Oid,
            Qid: qid,
            ansid: 1,
          };
          console.log(data);

          saveCall(data);

          setShowques(showques + 1);

          setOid("000");
        } else if (
          testques[showques - 1].ansid === 5 ||
          testques[showques - 1].ansid === 1
        ) {
          setShowques(showques + 1);
        } else {
          let qid = testques[showques - 1]._id;
          let question = testques[showques - 1].question;
          const data = {
            cookie_token: cook,
            question: question,
            category: choice,
            userAnswer: oid,
            Qid: qid,
            ansid: oid === "000" ? 5 : 1,
          };
          console.log(data);

          saveCall(data);

          setShowques(showques + 1);

          setOid("000");
        }
      }
    } else {
      if (oid !== "000") {
        let qid = testques[showques - 1]._id;
        let question = testques[showques - 1].question;
        const data = {
          cookie_token: cook,
          question: question,
          category: choice,
          userAnswer: oid,
          Qid: qid,
          ansid: oid === "000" ? 5 : 1,
        };
        console.log(data);

        saveCall(data);

        setOid("000");

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
      } else if (oid === "000") {
        if (
          testques[showques - 1].ansid === 5 ||
          testques[showques - 1].ansid === 1
        ) {
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
        } else {
          let qid = testques[showques - 1]._id;
          let question = testques[showques - 1].question;
          let data, OptionId;

          if (
            testques[showques - 1].userAnswer !== -1 &&
            testques[showques - 1].ansid === 3
          ) {
            OptionId = testques[showques - 1].options.filter(
              (option) => option.value === testques[showques - 1].userAnswer
            );
            data = {
              cookie_token: cook,
              question: question,
              category: choice,
              userAnswer: OptionId[0].Oid,
              Qid: qid,
              ansid: 1,
            };
          } else {
            data = {
              cookie_token: cook,
              question: question,
              category: choice,
              userAnswer: oid,
              Qid: qid,
              ansid: oid === "000" ? 5 : 1,
            };
          }
          console.log(data);

          saveCall(data);

          setOid("000");

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
      }
    }
  };

  return (
    <>
      <ToastContainer />
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
            {loader ? (
              <>
                <h1>{testques && testques[showques - 1].question}</h1>
                <div className="testbtn">
                  {testoptions
                    ? testoptions.map((option, index) => (
                        <div
                          className={show ? "que_options2" : "que_options1"}
                          key={option.Oid}
                        >
                          <input
                            type="radio"
                            defaultChecked={
                              testques[showques - 1].userAnswer === option.Oid
                                ? true
                                : false
                            }
                            onClick={() => {
                              setOid(option.Oid);
                            }}
                            value={option.value}
                            name="btn"
                          />

                          <label>
                            {testques[showques - 1].options[index].value}
                          </label>
                        </div>
                      ))
                    : ""}
                </div>
              </>
            ) : (
              <div className="MainLoader">
                <Loader height="80" width="80" color="#db9cff" />
              </div>
            )}
          </div>
        </div>
        <div className={show ? "footer2" : "footer1"}>
          <div className="foot_btn">
            <Button onClick={Mark} id="mfr">
              {loading1 ? (
                <Loader height="20" width="20" color="white" />
              ) : (
                "Mark for Review"
              )}
            </Button>
            <Button id="s_n" onClick={Next}>
              {loading ? (
                <Loader height="20" width="20" color="white" />
              ) : (
                "save & next"
              )}
            </Button>
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
    </>
  );
};
export default QuestionPannel;
