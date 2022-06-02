import React, { useState } from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {
    const [studentNo,setStudentNo] = useState("");
    const [password,setPassword] = useState("");

  return (
    <div className="form_body">
<form className='form_container' >
 <TextField label="Student No." variant='standard' size='large' className='input_field'
 type='text' value={studentNo}
//  InputProps={
//      {startAdornment:<InputAdornment position='start'><AccountCircleIcon/></InputAdornment>}   
//  }
 />
 <TextField label="password" variant='standard' size='large' className='input_field'
 type='password' value={password}
//  InputProps={
//      {startAdornment:<InputAdornment position='start'></InputAdornment>}
     
//  }
/>
</form>

      </div>
  )
}

export default Login