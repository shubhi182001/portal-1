import React from 'react'
import "./navbar.css"
import {FiPower} from "react-icons/fi"

function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <div className='left'>

         <div className="navbarLeft">
            <h1>ADMIN</h1>
        </div>

      </div>
       
       <div className='right'>
          <div className="navbarRight">
          <div className="buttonWrapper">
            <button className=" but get"><p className='buttonText'>GET</p></button>
            <button className=' but add'><p className='buttonText'>ADD</p></button>
            <button className="but leaderboard"><p className='buttonText'>LEADERBOARD</p></button>
            <FiPower className="but logoutBtn" style={{color:'white', marginTop:"22px", fontSize:"21px" }}/>
          </div>
       </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar