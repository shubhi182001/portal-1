import React from 'react'
import "./homepage.css"
import Navbar from '../compo/navbar/Navbar'
import Homebox from '../compo/homeBox/Homebox' 

function Homepage() {
  return (
      <>
      <div className="homepage">
        <Navbar/>
        <div className="box">
          <Homebox/>
        </div>
      </div>
      </>
  )
}

export default Homepage