import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
    // const  [login,setLogin]=
    // useState({
    //     username:"",
    //     password:''
    // })

    // const value = (event)=>{
    //     let event=e.target;
    //  setLogin(...login,({}))
    // }
  return (
    <div className='body'>
        <form action="submit">
        <div className='login'>
            <h3>Login</h3>
            <input className='inlog' type="text" placeholder='USERNAME' />
        </div>
        <div className='password'>
            <h3>Password</h3>
            <input className='inpass' type="Password" placeholder='PASSWORD'/>
        </div>
        <div className='button'>
            <button>Login</button>
        </div>
        </form>  

    </div>
  )
}

export default Login