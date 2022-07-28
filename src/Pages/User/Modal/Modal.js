import React, { useEffect } from "react";
import "./Modal.css";
import { Button } from "@mui/material";

import Logocsi from "../../../Images/User/Logocsi.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Modal = ({ setShow }) => {
  const cook = localStorage.getItem("cookie");
  const Submit = async (e) => {
    e.preventDefault();
    const value = {
      cookie_token: cook,
    };
    const result = await axios.patch(
      "https://csiportal.herokuapp.com/quesansdata",
      value
    );
    if (result.data.isVerified === true) {
      localStorage.setItem("testpage", "true");
      navigate("/feedback");
    } else {
      navigate("/");
    }
  };
  const NotSubmit = async (e) => {
    e.preventDefault();
    setShow(false);
  };

  const navigate = useNavigate();
  // const btnRef = useRef();
  useEffect(() => {
    const close = (event) => {
      // console.log(e);
      if (event.path[0].tagName !== "BUTTON") {
        setShow(false);
      }
    };
    document.body.addEventListener("click", close);

    let testpage = localStorage.getItem("testpage");

    if (testpage) {
      navigate("/feedback");
    }
    return () => document.body.removeEventListener("click", close);
  }, []);

  return (
    <div className="modalbackground">
      <div className="modalcontainer">
        <div className="csilogo">
          <img
            src={Logocsi}
            alt="none"
            className="thankyou_img"
            height="100px"
          />
        </div>
        <div className="title">
          <h3>Are You Sure You Want To End The Exam?</h3>
        </div>
        <div className="footr">
          <Button id="nobtn" onClick={NotSubmit}>
            NO
          </Button>
          {/* <button id="nobtn" onClick={NotSubmit}>
            NO
          </button> */}
          <Button id="yesbtn" onClick={Submit}>
            Yes
          </Button>
          {/* <button id="yesbtn" onClick={Submit}>
            Yes
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
