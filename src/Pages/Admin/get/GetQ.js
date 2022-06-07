import Navbar from '../navbar/Navbar'
import {Link} from "react-router-dom"
import React from 'react'

function GetQ() {
  return (
    <>
    <Navbar/>
    <Link to="/editq"><button> Edit </button></Link>
    </>
  )
}

export default GetQ

