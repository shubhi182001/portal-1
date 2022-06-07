import React, { useState } from "react";
import "./Login.css";
// import HiOutlineHashtag from "react-icons"
import Logocsi from "../../../Images/User/Logocsi.svg"
import computers from "../../../Images/User/computers.png";
import Ellipse from "../../../Images/User/Ellipse.svg"
import Group from "../../../Images/User/Group.svg"
import Login_Page_start from "../../../Images/User/Login_Page_start.svg"
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TagIcon from "@mui/icons-material/Tag";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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

  const validateStudentNo = (value) => {
    let error;
    const regex = /^[0-9]{7}$/;
    if (!value) {
      error = "Student Number is required";
      setErrorStudentType(true);
    } else if (!regex.test(value)) {
      error = "Student number is not matched";
      setErrorStudentType(true);
    } else {
      setErrorStudentType(false);
    }
    return error;
  };
  const validatePassword = (value) => {
    let error;
    const regex = /^[A-Za-z]{3,}[@][0-9]{7}$/;
    if (!value) {
      error = "password is required";
      setPasswordErrorType(true);
    } else if (!regex.test(value)) {
      error = "Your password is firstname@studentno.";
      setPasswordErrorType(true);
    } else {
      setPasswordErrorType(false);
    }
    return error;
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
    setEye(true);
    setVisibleIcon(true);

    setTimeout(() => {
      setEye(false);
      setVisibleIcon(false);
    }, 1000);
  };
  const Submit = (e) => {
    e.preventDefault();
    setStudentPasswordError(validatePassword(password));
    setStudentNumberError(validateStudentNo(studentNo));
  };
  return (
    <div className="form_body">
      <div className="logo">
        <img src={Logocsi} alt="none" className="logocsi"/>
      </div>
      <form className="form_container">
      <img src={Ellipse} className="admin_icon" />
      <img src={Group} className="admin_group" />
        <div className="icon_container">
          <div className="icon">
            <p className="bars"></p>
            <TagIcon />
          </div>
          <TextField
            label="Student No."
            variant="outlined"
            size="small"
            className="input_field"
            type="text"
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
            my={10}
            label="password"
            variant="outlined"
            size="small"
            className="input_field"
            error={PasswordErrorType ? true : ""}
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
        <div className="icon_container">
          <div className="button_container">
            <Button
              className="btn"
              variant="contained"
              size="medium"
              onClick={Submit}
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="img">
        <img src={computers} alt="none" className="computers"/>
      </div>
    </div>
  );
};

export default Login;
