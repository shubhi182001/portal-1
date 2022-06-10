import React from 'react'
import "./Admin.css"
import Add from './add/addQuestions/Add'
import Homepage from './homepage/Homepage'
import FeedbackQ from '../Admin/add/addFeedbackQ/FeedbackQ'
import AddCandidate from '../Admin/add/addCandidate/AddCandidate'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Leaderboard from './leaderboard/Leaderboard'
import GetQ from "./get/GetQuestions/GetQ"
import GetCandidate from "./get/GetCandidate/GetCandidate"
import GetFeedbackQ from "./get/GetFeedback/Getfeedback"
import EditQ from './editQ/EditQ'


function Admin() {
  return (
    <>
    <div className="admin_body">
    <BrowserRouter>
    <Routes>
      <Route path='/homepage' element={<Homepage/>} />
      <Route path ='/getques' element={<GetQ/>} />
      <Route path='/editq' element={<EditQ/>} />
      <Route path ='/getfeedbackques' element={<GetFeedbackQ/>} />
      <Route path ='/getcandidate' element={<GetCandidate/>} />
      <Route path='/addques' element={<Add/>} />
      <Route path='/addfeedbackques' element={<FeedbackQ/>} />
      <Route path='/addcandidate' element={<AddCandidate/>} /> 
      <Route path='/leaderboard' element={<Leaderboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default Admin