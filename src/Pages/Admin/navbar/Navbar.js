import React from 'react'
import "./navbar.css"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {Link} from "react-router-dom"

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
                <a href="/getques">Get Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/getfeedbackques">Get Feedback Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/getcandidate">Get Candidates</a>
              </div>
            </div>
            <div class="but dropdown">
              <button class="dropbtn">ADD</button>
              <div class="dropdown-content">
                <a href="/addques">Add Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/addfeedbackques">Add Feedback Questions</a>
                <hr style={{color:"white"}}/>
                <Link to="/addcandidate">Add Candidates</Link>
              </div>
            </div>
            <Link to="/leaderboard">
            <button  className="but leaderboard"><p className='buttonText'>LEADERBOARD</p></button>
            </Link>
            <PowerSettingsNewIcon className="but logoutBtn" style={{color:'white',  fontSize:23 }}/>
          </div>
       </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar