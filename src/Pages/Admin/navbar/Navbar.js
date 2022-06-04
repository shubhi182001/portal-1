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
            <div class="but dropdown">
              <button class="dropbtn">GET</button>
              <div class="dropdown-content">
                <a href="/">Get Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/">Get Feedback Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/">Get Candidates</a>
              </div>
            </div>
            <div class="but dropdown">
              <button class="dropbtn">ADD</button>
              <div class="dropdown-content">
                <a href="/">Add Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/">Add Feedback Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/">Add Candidates</a>
              </div>
            </div>
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