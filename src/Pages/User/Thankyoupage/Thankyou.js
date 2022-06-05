import React from 'react'
import './Thankyou.css'
import Logocsi from "../../../Images/User/Logocsi.svg"
const Thankyou = () => {
  return (
    <>
    <div className='main'>
        <div className='container'>
        <div className="img">
        <img src= {Logocsi} alt="none"  height="100px"/>
      </div>
           
           <div className='txt'>
           THANK YOU FOR PARTICIPATING
           <br></br>
           You have been succesfully logged out.
           </div>
        </div>
    </div>
    </>
  )
}

export default Thankyou