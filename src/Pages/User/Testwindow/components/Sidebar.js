import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../../../Components/ContextProvider";
// import { TailSpin } from "react-loader-spinner";
import Loader from "../../../../Components/Loader/Loader";
const Sidebar = ({
  testques,
  setShow,
  setShowques,
  show,
  showques,
  choice,
}) => {
  const { loader, setOid } = useStateContext();
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const usercookie = localStorage.getItem("cookie");
  let st,
    result,
    limit = 3600000;
  const datacookie = {
    cookie_token: usercookie,
  };
  
  let d,
  interval = useRef();
const timer = () => {
const url = `${process.env.REACT_APP_URL}/logintime` ;
  axios
  .post(url, datacookie)
  .then((res) => {
    st = new Date(res.data.loginAt).getTime();
  })
  .catch((err) => {
    console.log(err);
  });

  interval = setInterval(() => {


      d = new Date().getTime();
      result = limit - (d - st);
      if (result) {
        const rhours = Math.floor(result / (1000 * 60 * 60));
        const rminutes = Math.floor(
          (result % (1000 * 60 * 60)) / (1000 * 60)
        );
        const rseconds = Math.floor((result % (1000 * 60)) / 1000);
        if (result < 0) {
          clearInterval(interval.current);
          const value = {
                cookie_token: usercookie,
              };
              // eslint-disable-next-line
              const result = axios.patch(
                "https://accessfre.herokuapp.com/quesansdata",
                value
              ).then((res)=>{
                  //  console.log(res)
              }).catch((err)=>{
                console.log(err);
              });




          localStorage.setItem("testpage", "true");

          navigate("/feedback");
        } else {
          setHours(rhours);
          setMinutes(rminutes);
          setSeconds(rseconds);
        }
      }






    // axios
    //   .get("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //   .then((res) => {
    //        console.log(res);
    //     d = new Date().getTime();
    //     result = limit - (d - st);
    //     if (result) {
    //       const rhours = Math.floor(result / (1000 * 60 * 60));
    //       const rminutes = Math.floor(
    //         (result % (1000 * 60 * 60)) / (1000 * 60)
    //       );
    //       const rseconds = Math.floor((result % (1000 * 60)) / 1000);
    //       if (result < 0) {
    //         clearInterval(interval.current);
    //         const value = {
    //                     cookie_token: usercookie,
    //                   };
    //                   // eslint-disable-next-line
    //                   const result = axios.patch(
    //                     "https://accessfre.herokuapp.com/quesansdata",
    //                     value
    //                   ).then((res)=>{
    //                        console.log(res)
    //                   }).catch((err)=>{
    //                     console.log(err);
    //                   });

    //         localStorage.setItem("testpage", "true");
    //         navigate("/feedback");
    //       } else {
    //         setHours(rhours);
    //         setMinutes(rminutes);
    //         setSeconds(rseconds);
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

  }, 1000);
};





  let sidebarbtn = [];
  for (let i = 1; i <= testques.length; i++) {
    sidebarbtn.push(i);
  }

  //New score count api Added
  // const cookie = {
  //   cookie_token: usercookie,
  // };
  const Submit = async (e) => {
    e.preventDefault();
    setShow(true);
    
  //   axios
  // .post("https://accessfre.herokuapp.com/score", cookie)
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  };

  //Api ends
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

        <div className={show ? "test_btn2" : loader ? "test_btn1" : "loader"}>
          {loader ? (
            sidebarbtn.map((i, index) => (
              <button
                className={
                  testques[index].ansid === 2
                    ? "sidebar_button"
                    : testques[index].ansid === 1
                    ? "save_next"
                    : testques[index].ansid === 3
                    ? "mark_review"
                    : testques[index].ansid === 5
                    ? "not_answered"
                    : "not_visited"
                }
                // className={
                //   flag.filter((val) => {
                //     val.Qid === testques[testques.map((val,index)=>{return index})]._id;
                //   })[0].ansid === 1
                //     ? "save_next"
                //     : "not_visited"
                // }
                key={index}
                onClick={() => {
                  handleoptions(i);
                }}
              >
                {i}
              </button>
            ))
          ) : (

              <Loader height="80" width="80" color="#db9cff" />
          )}
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
