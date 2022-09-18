import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import whitelogo from "../../../Images/User/csiwhitelogo.svg";
import backgroundInst from "../../../Images/User/background.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Instruction.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Instruction = () => {
  const navigate = useNavigate();
  const [chosenlang, setChosenlang] = useState("");
  useEffect(() => {
    let instruct = localStorage.getItem("instruct");

    if (instruct) {
      navigate("/testwindow");
    }
    // eslint-disable-next-line
  }, []);

  const handlelangchoice = (val) => {
    setChosenlang(val);
  };

  const cook = localStorage.getItem("cookie");
  // const choiceques = async () => {
  //   const data = await axios.put(`https://accessfre.herokuapp.com/question/shuffle/HTML`, {
  //     cookie_token: cook,
  //   });
  //   console.log(data);
  //   // setTestques(data.data.result);
  //   // setTestOptions(data.data.result[showques - 1].options);
  // };

  // button functionality for selected language [save and next]
  const chkvalidate = async (e) => {
    e.preventDefault();

    if (chosenlang === " ") {
      toast.error("Select any language first");
    } else {
      const result = await axios.patch(
        "https://accessfre.herokuapp.com/instruction",

        {
          cookie_token: cook,
          lang: chosenlang,
        }
      );
      if (result.data.isVerified === true) {
        localStorage.setItem("instruct", true);
        navigate("/testwindow");
      } else if (result.data.isVerified === false) {
        localStorage.removeItem("instruct");
        navigate("/");
      }
    }
  };

  return (
    <div className="instructions">
      <img className="bginst" src={backgroundInst} alt="logoimg" />
      <div className="inst_container">
        <div className="nav_inst">
          <h1>Instructions</h1>
          <img className="instcsilogo" src={whitelogo} alt="logoimg" />
        </div>
        <div className="ins">
          <ul type="disc">
            <li>
              1. This exam contains 4 mandatory categories: HTML, CSS, APTITUDE,
              and SQL.
            </li>
            <li>
              2. However, the candidate can select a choice of
              language(category) from the dropdown below.
            </li>
            <li>
              3. This exam will be of 60 minutes in duration. When you submit
              the test/run out of time all your marked responses whether saved
              or not will be submitted.
            </li>
            <li>
              4. For every correct answer, the candidate will be awarded 1 mark.
            </li>
            <li>
              5. For every question, you can either SAVE or MARK FOR REVIEW for
              the response.
            </li>
            <li>
              6. A question once attempted cannot be left unanswered as there is
              NO NEGATIVE MARKING in this test.
            </li>
            <li>
              7. You can end the test anytime by clicking on the submit button.
              Make sure you submit only when you are done.
            </li>
            <li>
              8. Once done submitting the test you'll be redirected to a
              feedback form. Your participation will only be considered once you
              submit your feedback.
            </li>
            <li>
              9. If the candidate tries to do any malicious activity, he/she
              shall be automatically disqualified.
            </li>
            <li>
              10. Before starting the test please make sure you have a stable
              internet connection.
            </li>
            <li>
              11. Kindly take note that this test allows only a single login for
              a user, so any kind of disconnection or reloading of the page
              might log you out of the test.
            </li>
          </ul>
        </div>
      </div>
      <div className="lang_selection">
        <div className="lang">
          <select
            className="select"
            defaultValue={"DEFAULT"}
            style={{ color: "white" }}
            onChange={(e) => handlelangchoice(e.target.value)}
            name="lang"
            id="options"
          >
            <option value="DEFAULT" disabled hidden>
              Language
            </option>
            <option
              value="C"
              style={{ color: "black", backgroundColor: "#F6FCFF" }}
            >
              C
            </option>
            <option
              value="C++"
              style={{ color: "black", backgroundColor: "#F6FCFF" }}
            >
              C++
            </option>
            <option
              value="JAVA"
              style={{ color: "black", backgroundColor: "#F6FCFF" }}
            >
              JAVA
            </option>
            <option
              value="PYTHON"
              style={{ color: "black", backgroundColor: "#F6FCFF" }}
            >
              PYTHON
            </option>
          </select>
        </div>
        <div className="start_exam">
          <Button
            onClick={chkvalidate}
            // onClick= {()=>{chkvalidate();choiceques();}}
            endIcon={<ArrowForwardIcon />}
            sx={{ fontSize: 20, width: 250, marginBottom: 5, height: 50 }}
            color="success"
            variant="contained"
          >
            Save & Next
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Instruction;
