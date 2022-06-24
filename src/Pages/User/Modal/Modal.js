import React from 'react';
import "./Modal.css";
import Logocsi from "../../../Images/User/Logocsi.svg"

const Modal = () => {
    
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
                <button id='yesbtn'>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default Modal