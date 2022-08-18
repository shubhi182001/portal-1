import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from "react-router-dom"
import { useNavigate,useLocation } from 'react-router-dom'
import "./response.css"
import { Card } from 'react-bootstrap'
import { style } from '@mui/system'
import axios from 'axios'
import Cardr from '../leaderboard/Cardr'

function Responses() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [Details, setDetails] = useState(state.post_result);
    const [seeAnswer, setSeeanswer] = useState(state.post_result);
      
   
    return (
        <>
            <div className="admin-main">
                <Navbar />
                <div className="response">
                    <h1 className='response_text'>Response</h1>
                </div>
                <div className='container_of_data'>
                    {/* <Card className="container_of_data"> */}
                    <div className='upper_div'>
                        <div >
                            <li className='info'>Name</li>
                            <li className='info'>Student Number</li>
                            <li className='info'>Branch</li>
                            <li className='info'>Score</li>
                            <li className='info'>Start Time</li>
                            <li className='info'>End Time</li>
                        </div>
                        <ul>
                            <li className='bluedetails'>{state.post_name}</li>
                            <li className='bluedetails'>{state.post_studentnum}</li>
                            <li className='bluedetails'>{state.post_branch}</li>
                            <li className='bluedetails'>{state.post_userNumCount}</li>
                            <li className='bluedetails'>{state.post_loginAt}</li>
                            <li className='bluedetails'>{state.post_logoutAt}</li>
                        </ul>
                    </div>
                    <div className='lower_div'>
                        {seeAnswer .map((p) =>
                            (<Cardr className="getCard" key={p._id} quesData={p}/>)
                        )}
                    </div>  
                </div>
            </div>
        </>
    )
}
export default Responses