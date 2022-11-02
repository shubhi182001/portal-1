import React, { useEffect, useState } from "react";
import "./Login.css";
import Logocsi from "../../../Images/User/Logocsi.svg";
import computers from "../../../Images/User/computers.png";
import Ellipse from "../../../Images/User/Ellipse.svg";
import Group from "../../../Images/User/Group.svg";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TagIcon from "@mui/icons-material/Tag";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [studentNo, setStudentNo] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [visibleIcon, setVisibleIcon] = useState(false);
  const [errorStudentType, setErrorStudentType] = useState(false);
  const [PasswordErrorType, setPasswordErrorType] = useState(false);
  const [focused, setFocused] = useState(false);
  const [studentNumberError, setStudentNumberError] = useState("");
  const [studentPasswordError, setStudentPasswordError] = useState("");
  const [routepass, setRoutepass] = useState(false);
  const [routename, setRoutename] = useState(false);
  const [credential, setCredential] = useState(true);
  const [loader, setLoader] = useState(false);
  const [flag, setFlag] = useState("0");
  const validateStudentNo = (value) => {
    let error;
    const regex = /^[0-9]{7,8}$/;
    if (!value) {
      error = "Student Number is required";
      setErrorStudentType(true);
      setRoutename(false);
      setCredential(false);
    } else if (!regex.test(value)) {
      error = "Student number is incorrect";
      setErrorStudentType(true);
      setRoutename(false);
      setCredential(false);
    } else {
      setErrorStudentType(false);
      setRoutename(true);
      setCredential(true);
    }
    return error;
  };
  const validatePassword = (value) => {
    let error;
    const regex = /^[A-Za-z]{3,}[@][0-9]{7,8}$/;
    if (!value) {
      error = "Password is required";
      setPasswordErrorType(true);
      setRoutepass(false);
      setCredential(false);
    } else if (!regex.test(value)) {
      error = "Password is incorrect";
      setPasswordErrorType(true);
      setRoutepass(false);
      setCredential(false);
    } else {
      setPasswordErrorType(false);
      setRoutepass(true);
      setCredential(true);
    }
    return error;
  };
  function onChangeCaptcha(value) {
    if (value) {
      setFlag("1");
    } else {
      setFlag("0");
      toast.error("Captcha Required!!!");
    }
  }
  const validateroute1 = (routepass, routename) => {
    if (routepass === true && routename === true) {
      localStorage.setItem("login1", true);
      navigate("/homepage");
    }
  };
  const validateroute2 = (routepass, routename, appear) => {
    if (routepass === true && routename === true && appear === true) {
      toast.error("User already completed the test!!!");
      navigate("/");
    } else if (routepass === true && routename === true && appear === false) {
      localStorage.setItem("login2", true);
      navigate("/instructions");
    }
  };
  const studentFocus = (e) => {
    setFocused(true);
    setStudentNumberError(validateStudentNo(studentNo));
  };
  const passwordFocus = (e) => {
    setFocused(true);
    setStudentPasswordError(validatePassword(password));
  };

  const seen = () => {
    setEye(!eye);
    setVisibleIcon(!visibleIcon);
  };

  const Submit = (e) => {
    setLoader(true);
    e.preventDefault();
    localStorage.removeItem("feedback");

    setStudentPasswordError(validatePassword(password));
    setStudentNumberError(validateStudentNo(studentNo));
    // eslint-disable-next-line
    {
      if (credential && flag === "1") {
        const data = {
          studentNum: +studentNo,
          password: password,
        };
          const url = `${process.env.REACT_APP_URL}/login`;
          console.log(url);
        axios
          .post(url, data)
          .then((res) => {
            if (flag === "1") {
              console.log(res.data);
              localStorage.setItem("cookie", res.data.cookie_token);
              let admin = res.data.isAdmin;
              if (admin === true) {
                validateroute1(routepass, routename);
              } else {
                let appeared = res.data.hasAppeared;
                // console.log(appeared);
                validateroute2(routepass, routename, appeared);
              }
              setLoader(false);
            }
          })
          .catch((err) => {
            setLoader(false);
            toast.error("Invalid Credentials");
          });
      } else {
        if (!studentNo && !password && !credential) {
          toast.error("Invalid Details");
        } else if (flag === "0") {
          toast.error("captcha required");
        }
        setLoader(false);
      }
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login1 = localStorage.getItem("login1"); // For admin
    let login2 = localStorage.getItem("login2"); //For user

    if (login1) {
      navigate("/homepage");
    } else if (login2) {
      navigate("/instructions");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="form_body">
      <div className="logo">
        <img src={Logocsi} alt="none" className="logocsi" />
      </div>
      <form className="form_container">
        <img src={Ellipse} alt="ellipse" className="admin_icon" />
        <img src={Group} alt="group" className="admin_group" />
        <div className="all_input_fields">
          <div className="icon_container">
            <div className="icon">
              <p className="bars"></p>
              <TagIcon />
            </div>
            <TextField
              autoComplete="off"
              label="Student No."
              variant="outlined"
              size="small"
              className="input_field"
              type="text"
              name="studentNum"
              error={errorStudentType ? true : false}
              onBlur={studentFocus}
              focused={focused.tostring}
              value={studentNo}
              onChange={(e) => setStudentNo(e.target.value)}
              inputProps={{ style: { fontSize: 15 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
            />
          </div>
          <div className="errormsg_container">
            <div className="errormsg">
              <span>{studentNumberError}</span>
            </div>
          </div>
          <div className="icon_container">
            <div className="icon">
              <p className="bars"></p>
              <LockOutlinedIcon />
            </div>
            <TextField
              autoComplete="off"
              my={10}
              label="Password"
              name="password"
              variant="outlined"
              size="small"
              className="input_field"
              error={PasswordErrorType ? true : false}
              onBlur={passwordFocus}
              focused={focused.tostring}
              type={eye ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // font size of input text
              InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={seen}>
                      {visibleIcon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { fontSize: 15 },
              }}
            />
          </div>
          <div className="errormsg_container">
            <div className="errormsg">
              <span>{studentPasswordError}</span>
            </div>
          </div>
          <div className="captcha_container">
            <ReCAPTCHA
              className="captcha"
              sitekey="6LeR19IiAAAAAHHtJTd8RhE13PFCnEWJdha9aEhy"
              onChange={onChangeCaptcha}
            />
            {/* site key : 6LeR19IiAAAAAHHtJTd8RhE13PFCnEWJdha9aEhy */}
            {/* secret key : 6LeR19IiAAAAAOVz4jmJhLeP_Bo1eNr6C-LWs_WS */}
          </div>
          <div className="icon_container2">
            <div className="button_container">
              <Button
                className="btn"
                variant="contained"
                size="medium"
                // onClick= {()=>{Submit();load();}}
                onClick={Submit}
              >
                {loader ? (
                  <TailSpin
                    height="20"
                    width="20"
                    color="white"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    visible={true}
                  />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div className="img">
        <img src={computers} alt="none" className="computers" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
