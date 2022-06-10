import React from 'react'
import './Animation.css'
import logo from './logo.svg'
import { useEffect } from 'react'

const Animation = () => {
 

 



  return (
   <>
    <body id='anime' className='body-i'>
    <div id='ani'>
    <div className='anime-2'>
    <img src={logo} alt="not found" className='logo-new' onload="document.body.style.opacity='0'"></img>
    </div>
    </div>
    </body>
   </>
  )
}

export default Animation