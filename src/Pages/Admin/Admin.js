import React from 'react'
import "./Admin.css"
// import Add from './add/addQuestions/Add'
// import Homepage from './homepage/Homepage'
// import FeedbackQ from '../Admin/add/addFeedbackQ/FeedbackQ'
import AddFeedback from './add/addFeedbackQ/AddFeedback'
import AddCandidate from '../Admin/add/addCandidate/AddCandidate'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Leaderboard from './leaderboard/Leaderboard'
import GetQ from "./Get/GetQuestions/GetQ"
// import GetQ from './Get/GetQuestions/GetQ'
import GetCandidate from "./Get/GetCandidate/GetCandidate"
import GetFeedbackQ from "./Get/GetFeedback/Getfeedback"
import EditQ from './editQ/EditQ'
import Responses from './leaderboard/Responses'
import AddQuestions from './add/addQuestions/AddQuestions'
import Editf from './Get/GetFeedback/components/Editf'


function Admin() {
  return (
    <>
    {/* <div className="admin_body"> */}
    <BrowserRouter>
    <Routes>
      {/* <Route path='/homepage' element={<Homepage/>} /> */}
      <Route path ='/getques' element={<GetQ/>} />
      <Route path='/editq' element={<EditQ/>} />
      <Route path ='/getfeedbackques' element={<GetFeedbackQ/>} />
      <Route path='/editf' element={<Editf/>}/>
      <Route path ='/getcandidate' element={<GetCandidate/>} />
      <Route path='/addques' element={<AddQuestions/>} />
      <Route path='/addfeedbackques' element={<AddFeedback/>} />
      <Route path='/addcandidate' element={<AddCandidate/>} /> 
      <Route path='/leaderboard' element={<Leaderboard/>}/>
      <Route path='/responses' element={<Responses/>} />
    </Routes>
    </BrowserRouter>
    {/* </div> */}
    </>
  )
}

export default Admin