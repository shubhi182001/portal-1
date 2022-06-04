import React, { useState } from "react";
import "./Login.css";
import computers from "../../../Images/User/computers.svg"
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Login = () => {
  const [studentNo, setStudentNo] = useState("");
  const [password, setPassword] = useState("");
   const [type,setType] = useState("password");
   const [eye,setEye] = useState(false);
   const [visibleIcon,setVisibleIcon] = useState(false);
   

  const Submit = (e) =>{
      e.preventDefault();
   console.log(studentNo,password)
  }

  const studentReg = () =>{

  }
  const passwordRegex = () =>{

  }
  const seen = () => {
          setEye(true);
          setVisibleIcon(true);

        setTimeout(()=>{
        setEye(false);
        setVisibleIcon(false);

      },1000)

  };
  return (
    <div className="form_body">
      <form className="form_container">
        <div className="icon_container">
          <div className="icon">
            <AccountCircleIcon />
          </div>
          <TextField
            label="Student No."
            variant="standard"
            size="Normal"
            className="input_field"
            type="text"
            onBlur={studentReg}
            value={studentNo}
            onChange={(e)=>setStudentNo(e.target.value)}
            inputProps={{style: {fontSize: 15}}} // font size of input text
            InputLabelProps={{style: {fontSize: 15}}} // font size of input label          
          />
        </div>
        <div className="icon_container">
          <div className="icon">
            <KeyIcon />
          </div>
          <TextField
            my={10}
            label="password"
            variant="standard"
            size="large"
            className="input_field"
            onBlur={passwordRegex}
            type={eye ? 'text' : 'password'}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             // font size of input text
            InputLabelProps={{style: {fontSize: 15}}} // font size of input label
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={seen}>
                  {visibleIcon ? <VisibilityIcon  /> : <VisibilityOffIcon  /> }
                  </IconButton>
                </InputAdornment>
              )
              ,style: {fontSize: 15}
            }}
          />
        </div>
        <div className="icon_container">
          <div className="icon button_container">
            <Button variant="contained" size='medium' disableElevation onClick={Submit}>Login</Button>
          </div>
        </div>
      </form>
      <div className="img">
        <img src= {computers} alt="none"  height="300px"/>
      </div>
    </div>
  );
};

export default Login;
