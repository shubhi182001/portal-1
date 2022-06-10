import React from 'react'
import Navbar from '../../navbar/Navbar'
import { Link } from 'react-router-dom'

const GetQ = () => {
  return (
    <>
    <Navbar/>
    <Link to="/editq"> <button>getQ</button> </Link>
    </>
  )
}

export default GetQ