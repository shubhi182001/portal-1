import React, { useEffect } from 'react';
import "./Modal.css";
import Logocsi from "../../../Images/User/Logocsi.svg"
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const Submit =async (e) => {
    e.preventDefault();
    // setShow(true);    
    localStorage.setItem('testpage','true');
    navigate('/feedback');
  }
  const navigate = useNavigate();
  useEffect(()=>
    {
      
        let testpage = localStorage.getItem('testpage');
  
        if(testpage){
           navigate('/feedback')
        }
        
    },[]);
    
  return (
    <div className='modalbackground'>
        <div className='modalcontainer'>
            <div className='csilogo'>
            <img src= {Logocsi} alt="none" className='thankyou_img' height="100px"/>
            </div>
            <div className='title'>
                <h1>Are You Sure You Want To End The Exam?</h1>
            </div>
            <div className='footr'>
                <button id='nobtn'>NO</button>
                <button id='yesbtn'  onClick={Submit}>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default Modal