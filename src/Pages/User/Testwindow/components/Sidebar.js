import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='Sidebar_body'>
     <div className="time_left">Time left</div>
     <div className="time_section">11 : 00 : 00</div>
     <div className="heading">Questions</div>
     <div className="buttons_container">
       <div className="buttons">
         <button>1</button>
         <button>1</button>
         <button>1</button>
         <button>1</button>
         <button>1</button>
         <button>1</button>
       </div>
       <button className='submit_button'>Submit Test</button>
     </div>
    </div>
  )
}

export default Sidebar
