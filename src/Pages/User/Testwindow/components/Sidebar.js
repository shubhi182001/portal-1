import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import Modal from "./../../Modal/Modal";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { AirlineSeatFlatAngled } from "@mui/icons-material";
const Sidebar = ({ testques, setShow, showques, setShowques, ansid, flag ,show}) => {

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const usercookie = localStorage.getItem("cookie");

 let st,result,limit = 7200000;
 const datacookie = {
    cookie_token:usercookie
  };
  // const flag_data = {

  // }
  useEffect(()=>{
     axios
    .put("https://csiportal.herokuapp.com/ans/flags",datacookie)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])


  let d,interval = useRef();
  const timer = () => {

    interval = setInterval(() => {
      axios.post("https://csiportal.herokuapp.com/logintime",datacookie)
      .then((res)=>{
        st = new Date(res.data.loginAt).getTime();
      })
      .catch((err) =>{
        console.log(err)
      })
      axios
      .get("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
      .then((res)=> {
       d = new Date(res.data.datetime).getTime();
       result = limit - (d-st);
      if(result){
        const rhours = Math.floor((result)/(1000 * 60 *60));
        const rminutes = Math.floor((result%(1000 * 60 * 60))/ (1000 * 60));
        const rseconds = Math.floor((result%(1000 * 60))/ 1000);
        if(result<0){
          clearInterval(interval.current);
          localStorage.setItem('testpage','true');
          navigate("/feedback");
        }
        else{
          setHours(rhours);
          setMinutes(rminutes);
          setSeconds(rseconds);
        }
      }
      })
      .catch((err)=>{
       console.log(err);
      })
    }, 1000);
  };

  let sidebarbtn = [];
  for (let i = 1; i <= testques.length; i++) {
    sidebarbtn.push(i);
  }

  const Submit = async (e) => {
    e.preventDefault();
    setShow(true);
    // localStorage.setItem('testpage','true');
    // navigate('/feedback');
  };

  const navigate = useNavigate();

  useEffect(() => {
    timer();
    clearInterval(interval.current);
    let testpage = localStorage.getItem("testpage");

    if (testpage) {
      navigate("/feedback");
    }
  }, []);


 // for getting clicked question 
  const handleoptions = (i) => {
    setShowques(i);
  };

  return (
    <div className={show ? "Sidebar_body2" : "Sidebar_body1"}>
      <div className="part1">
        <div className={show ? "time_left2" : "time_left1"}>
          <h1>Time left</h1>
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
                ansid === "2"
                  ? "sidebar_button"
                  : ansid === "1"
                  ? "save_next"
                  : ansid === "3"
                  ? "mark_review"
                  : "visited"
              }
              key={index}
              onClick={() => handleoptions(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
      <div className="side_footer">
        <button className={show ? "submit_button2" : "submit_button1"} onClick={Submit}>
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
