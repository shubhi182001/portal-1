import React, { useEffect } from 'react'
import './Thankyou.css'
import Logocsi from "../../../Images/User/Logocsi.svg"
const Thankyou = () => {
  useEffect(()=>
    {
    localStorage.setItem('feedback', true);

      localStorage.removeItem('login2');
      localStorage.removeItem('instruct');
      // localStorage.removeItem('feedback');
      localStorage.removeItem('testpage');
      localStorage.removeItem('cookie');
      localStorage.setItem('Appeared', true);     
        
    },[]);
  return (
    <>
    <div className='main'>
        <div className='container1'>
        <div className="img">
        <img src= {Logocsi} alt="none" className='Thankyou_img' height="100px"/>
      </div>
           
           <div className='txt'>
           THANK YOU FOR PARTICIPATING
           <br></br>
           You have been successfully logged out.
           </div>
        </div>
    </div>
    </>
  )
}

export default Thankyou