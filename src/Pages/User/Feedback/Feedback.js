import React, { useEffect, useState } from "react";
import "./Feedback.css";
import { Button, Typography } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Feedback = () => {
  const [ques, setQues] = useState([]);
  const [TextArea, setTextArea] = useState("");
  const [postData, setPostData] = useState([]);

  const validateRadio = () => {
    if (postData.length !== ques.length || TextArea.trim() === "") {
      toast.error("Complete all fields");
    }
  };
  const handle = (e, index) => {
    postData.push({
      question: ques[index].question,
      value: e.target.value,
      qid: ques[index]._id,
    });
    // console.log(postData);
  };
  const handleText = (e) => {
    setTextArea(e.target.value);
    // console.log(TextArea);
  };
  const Submit = (e) => {
    e.preventDefault();
    validateRadio();
    // console.log(postData.length, ques.length, TextArea,TextArea.trim());
    if (postData.length === ques.length && TextArea.trim() !== "") {
      const cook = localStorage.getItem("cookie");
      let feedbackData = {
        cookie_token: cook,
        response: postData,
        feedtext: TextArea,
      };
      // console.log(feedbackData);
      axios
        .post(`${process.env.REACT_APP_URL}/response/feedanswer`, feedbackData)
        .then((res) => {
          // console.log(res);
          setPostData([]);
        })
        .catch((err) => {
          console.log(err);
        });
      localStorage.setItem("feedback", true);
      navigate("/thankyou");
      localStorage.removeItem("login2", true);
      localStorage.removeItem("instruct", true);
      localStorage.removeItem("feedback", true);
    } else console.log("rejected");
  };
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/feed/seefeedbackques`)
      .then((res) => {
        // console.log(res.data);
        setQues(res.data);
      });
    let login = localStorage.getItem("feedback");
    if (login) {
      navigate("/thankyou");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="main">
        <div className="feedback_form">
          <div className="appbar">Feedback</div>

          <div className="questions_container">
            {ques.map((element, index) => {
              return (
                <FormControl className="questions" key={index}>
                  <FormLabel className="FormLabel">
                    <Typography variant="h6">{element.question}</Typography>
                  </FormLabel>
                  <RadioGroup
                    className="radio"
                    onChange={(e) => {
                      handle(e, index);
                    }}
                    row
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </FormControl>
              );
            })}

            <div className="text-container">
              <Typography variant="h6" my={2}>
                Your suggestions matter, drop us one!
              </Typography>
              <textarea
                required
                className="text"
                type="text"
                onChange={(e) => {
                  handleText(e);
                }}
              ></textarea>
            </div>
            <div className="button">
              <Button
                id="btn"
                size="large"
                type="submit"
                variant="contained"
                onClick={Submit}
              >
                <b className="btncolor">Submit</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Feedback;
