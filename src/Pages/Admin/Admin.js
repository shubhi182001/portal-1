import React from 'react'
import Navbar from './navbar/Navbar'
import "./Admin.css"
import { Card } from '@mui/material'
import Add from './add/addQuestions/Add'
import Homebox from '../Admin/homeBox/Homebox'
import FeedbackQ from '../Admin/add/addFeedbackQ/FeedbackQ'
import AddCandidate from '../Admin/add/addCandidate/AddCandidate'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Leaderboard from './leaderboard/Leaderboard'
import GetQ from './get/GetQ'
import GetCandidate from './get/GetCandidate'
import GetFeedbackQ from './get/GetFeedbackQ'


function Admin() {
  return (
    <>
    <BrowserRouter>
    {/* <div className='card'>
    <Card className='card-content'>
    </Card>
    </div> */}
    <Navbar/>
    <Routes>
      <Route path ='/getques' element={<GetQ/>} />
      <Route path ='/getfeedbackques' element={<GetFeedbackQ/>} />
      <Route path ='/getcandidate' element={<GetCandidate/>} />
      <Route path='/addques' element={<Add/>} />
      <Route path='/addfeedbackques' element={<FeedbackQ/>} />
      <Route path='/addcandidate' element={<AddCandidate/>} /> 
      <Route path='/leaderboard' element={<Leaderboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Admin