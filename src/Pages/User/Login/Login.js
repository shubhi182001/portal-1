import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
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
  const [routepass,setRoutepass] = useState(false);
  const [routename,setRoutename] = useState(false);
  const [appeared,setAppeared] = useState(false);


  const validateStudentNo = (value) => {
    let error;
    const regex = /^[0-9]{7}$/;
    if (!value) {
      error = "Student Number is required";
      setErrorStudentType(true);
      setRoutename(false);
    } else if (!regex.test(value)) {
      error = "Student number is incorrect";
      setErrorStudentType(true);
      setRoutename(false);
    } else {
      setErrorStudentType(false);
      setRoutename(true);
    }
    return error;
  };
  const validatePassword = (value) => {
    let error;
    const regex = /^[A-Za-z]{3,}[@][0-9]{7}$/;
    if (!value) {
      error = "Password is required";
      setPasswordErrorType(true);
      setRoutepass(false);
    } else if (!regex.test(value)) {
      error = "Password is incorrect";
      setPasswordErrorType(true);
      setRoutepass(false);
    } else {
      setPasswordErrorType(false);
      setRoutepass(true);

    }
    return error;
  };
  const validateroute1 = (routepass,routename) =>{
    if(routepass===true && routename===true){
      localStorage.setItem('login1', true);
      navigate('/homepage')
      // setAdmin(true)
      // console.log(admin)
      
      

    }
  }
  const validateroute2 = (routepass,routename) =>{
    if(routepass===true && routename===true){
      localStorage.setItem('login2', true);
      // setAdmin(false)
      
        navigate('/instructions')
        // console.log(admin)
      

    }
  }
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
  const Submit = async (e) => {
    e.preventDefault();
    setStudentPasswordError(validatePassword(password));
    setStudentNumberError(validateStudentNo(studentNo));
    console.log(studentNo,password)
    // console.log(routepass,routename);
    const data = {
       studentNum : +(studentNo),
      password : password,
    }
    axios
        .post(
          "https://csiportal.herokuapp.com/login",
        data
        )
        .then((res) => {
          console.log(res.data);
          // console.log(res.data.cookie_token);
          localStorage.setItem('cookie', res.data.cookie_token);
          // console.log(res.data.hasAppeared);
          setAppeared(res.data.hasAppeared);
          localStorage.setItem('Appeared',res.data.hasAppeared);
          if(res.data.isAdmin==="true")
          {          
            validateroute1(routepass,routename);
            // console.log("x")
          }
          else{
          
            validateroute2(routepass,routename);
            // console.log("y")


          }
          // const cookie = res.data.cookie_token;
        }).catch((err)=>{
          console.log(err)
        });
        
        

    // localStorage.setItem('login', true);

    // navigate('/instructions')
  }
  const navigate = useNavigate();
  useEffect(()=>
    {
        let login1 = localStorage.getItem('login1');
        let login2 = localStorage.getItem('login2');
  
        if(login1){
          navigate('/homepage')
        }
        else{

           if (login2 && appeared==false)
          {
            navigate('/instructions')
          }
          else if (login2 && appeared==true){
            navigate('/')
          }
        }
      
        
    },[]);
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
        <div className="icon_container2">
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
