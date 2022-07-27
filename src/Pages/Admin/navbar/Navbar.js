import React from 'react'
import "./navbar.css"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {Link} from "react-router-dom"
import logo from "../../../Images/Admin/logo.png" 
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  const nav = () =>{
    navigate('/homepage');
  }

  const logout=(e) =>
  {
    localStorage.removeItem('login1', true);
    localStorage.removeItem('cookie');
    localStorage.removeItem('Appeared');   
    navigate('/');
  }
  return (
    <>
    <nav className='navbar'>
      <div className='left'>
         <div className="navbarLeft">
           <img className="logo" src={logo} alt="error" />       
          <h1 onClick={nav} className='admin_text'>ADMIN</h1>
        </div>

      </div>
       <div className='right'>
          <div className="navbarRight">
          <div className="buttonWrapper">
            <div className="but dropdown">
              <button className="dropbtn">GET</button>
              <div className="dropdown-content">
                <a href="/getques">Get Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/getfeedbackques">Get Feedback Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/getcandidate">Get Candidates</a>
              </div>
            </div>
            <div className="but dropdown">
              <button className="dropbtn">ADD</button>
              <div className="dropdown-content">
                <a href="/addques">Add Questions</a>
                <hr style={{color:"white"}}/>
                <a href="/addfeedbackques">Add Feedback Questions</a>
                <hr style={{color:"white"}}/>
                <Link to="/addcandidate">Add Candidates</Link>
              </div>
            </div>
            <Link to="/leaderboard">
            <button  className="but leaderboard"><p style={{fontSize:"22px"}} className='buttonText'>LEADERBOARD</p></button>
            </Link>
            <button className="but dropdown" onClick={logout}>
            <PowerSettingsNewIcon className="but logoutBtn" style={{color:'white',  fontSize:28 }}/>
            </button>
          </div>
       </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar