import React from 'react'
import './Confirmation.css'
import {Button} from "@mui/material";
import Logocsi from "../../../Images/User/Logocsi.svg"


const Confirmation = () => {
    const Yes =(e)=>{
        e.preventDefault();
    }
    const No =(e)=>{
        e.preventDefault();
    }
  return (
    <div className='main'>
        <div className='container'>
        <div className="img">
        <img src= {Logocsi} alt="none"  height="100px"/>
      </div>
           Are you sure you want to end the Exam?
           <div className= "button">

        <Button id ='btn1'  size="large" type="submit" variant="contained" onClick={No}><b className='btncolor'>NO</b></Button>
        <Button id ='btn2'  size="large" type="submit" variant="contained" onClick={Yes}><b className='btncolor'>YES</b></Button>
        </div>
           
        </div>
    </div>
  )
}

export default Confirmation