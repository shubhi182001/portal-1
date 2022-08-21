import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../../../Components/ContextProvider";
const Sidebar = ({ testques, setShow, setShowques, show }) => {
  const { setOid } = useStateContext();
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const usercookie = localStorage.getItem("cookie");
  let st,
    result,
    limit = 7200000;
  const datacookie = {
    cookie_token: usercookie,
  };

  let d,
    interval = useRef();
  const timer = () => {
    interval = setInterval(() => {
      axios
        .post("https://csiportal.herokuapp.com/logintime", datacookie)
        .then((res) => {
          st = new Date(res.data.loginAt).getTime();
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        .then((res) => {
          d = new Date(res.data.datetime).getTime();
          result = limit - (d - st);
          if (result) {
            const rhours = Math.floor(result / (1000 * 60 * 60));
            const rminutes = Math.floor(
              (result % (1000 * 60 * 60)) / (1000 * 60)
            );
            const rseconds = Math.floor((result % (1000 * 60)) / 1000);
            if (result < 0) {
              clearInterval(interval.current);
              localStorage.setItem("testpage", "true");
              navigate("/feedback");
            } else {
              setHours(rhours);
              setMinutes(rminutes);
              setSeconds(rseconds);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  };

  let sidebarbtn = [];
  for (let i = 1; i <= testques.length; i++) {
    sidebarbtn.push(i);
  }

  const Submit = async (e) => {
    e.preventDefault();
    setShow(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    timer();
    clearInterval(interval.current);
    let testpage = localStorage.getItem("testpage");

    if (testpage) {
      navigate("/feedback");
    }
    // eslint-disable-next-line
  }, []);

  // for getting clicked question
  const handleoptions = (i) => {
    setShowques(i);
    setOid("000");
  };

  return (
    <div className={show ? "Sidebar_body2" : "Sidebar_body1"}>
      <div className="part1">
        <div className={show ? "time_left2" : "time_left1"}>
          <h3>Time left</h3>
        </div>
        <div className="time_measure">
          <div className="time_counting2">
            <span className={show ? "time_num2" : "time_num1"}>{hours}</span>
            <span className="time_text">hours</span>
          </div>
          <div className="time_counting2">
            <span className={show ? "time_num2" : "time_num1"}>{minutes}</span>
            <span className="time_text">min</span>
          </div>
          <div className="time_counting2">
            <span className={show ? "time_num2" : "time_num1"}>{seconds}</span>
            <span className="time_text">sec</span>
          </div>
        </div>
        <div className={show ? "time_head2" : "time_head1"}>Questions</div>

        <div className={show ? "test_btn2" : "test_btn1"}>
          {sidebarbtn.map((i, index) => (
            <button
              className={
                testques[i - 1].flagMark === 2
                  ? "sidebar_button"
                  : testques[i - 1].flagMark === 1
                  ? "save_next"
                  : testques[i - 1].flagMark === 3
                  ? "mark_review"
                  : testques[i - 1].flagMark === 5
                  ? "not_answered"
                  : "not_visited"
              }
              key={index}
              onClick={() => {
                handleoptions(i);
              }}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
      <div className="side_footer">
        <button
          className={show ? "submit_button2" : "submit_button1"}
          onClick={Submit}
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
