import React from 'react'
import './Animation.css'
import logo from "./logo.svg";

const Animation = () => {
  return (
   <>
    <body>
    <div>
    <img src={logo} alt="not found" className='logo' onload="document.body.style.opacity='0'"></img>
    </div>
    </body>
   </>
  )
}

export default Animation