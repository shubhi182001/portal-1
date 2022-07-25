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
    console.log(state);
    const [Details, setDetails] = useState(state.post_result);
    const [seeAnswer, setSeeanswer] = useState(state.post_result);
    let data;
    const studentDetail = ['Name', 'StudentNo', 'Branch', 'Score', 'StartTime', 'EndTime'];
    const showDetails = studentDetail.map((info => <li>{info}</li>))
   
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
                        <div classname='info'>{showDetails}</div>
                        <ul>
                            <li>{state.post_name}</li>
                            <li>{state.post_studentnum}</li>
                            <li>{state.post_branch}</li>
                            <li>100</li>
                            <li>10:00</li>
                            <li>12:00</li>
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