import React from 'react'
import Navbar from './navbar/Navbar'
import "./Admin.css"
import { Card } from '@mui/material'
import Add from '../Admin/add/Add'

function Admin() {
  return (
    <>
    <Navbar/>
    <div className='card'>
    <Card className='card-content'>
     
    </Card>
    </div>
    <Add/>
    </>
  )
}

export default Admin