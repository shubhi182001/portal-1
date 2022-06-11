import React from 'react'
import Navbar from '../navbar/Navbar'
import "./leaderboard.css"
import { TextField } from '@mui/material'



const Leaderboard = () => {
  return (
    <>
    <Navbar/>
    <div className='dabba'>
    <div className='top'>
    Leaderboard </div>
    </div>
    <div className='wrap'>
      
      <div className="search">
        <TextField id="outlined-basic"
        variant='outlined'
        fullWidth
        label="Search"
        />
      </div>
    </div>
    </>
  )
}

export default Leaderboard;
