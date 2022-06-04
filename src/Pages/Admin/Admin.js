import React from 'react'
import Navbar from './navbar/Navbar'
import "./Admin.css"
import { Card } from '@mui/material'

function Admin() {
  return (
    <>
    <Navbar/>
    <div className='card'>
    <Card className='card-content'>
      hello
    </Card>
    </div>
    
    </>
  )
}

export default Admin