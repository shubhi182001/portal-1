import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from "react-router-dom"

import "./response.css"
import { Card } from 'react-bootstrap'
import { style } from '@mui/system'
import axios from 'axios'
import Cardr from '../leaderboard/Cardr'

function Responses() {
    const [Details, setDetails] = useState();
    const [seeAnswer, setSeeanswer] = useState();
    let data;
    const studentDetail = ['Name', 'StudentNo', 'Branch', 'Score', 'StartTime', 'EndTime'];
    const showDetails = studentDetail.map((info => <li>{info}</li>))
    const url = "https://csiportal.herokuapp.com/leaderboard";
    // let question ;
    // for(let i = 0; i < )
    useEffect(() => {
        getdata();
        // { Details && console.log(Details) };
    }, [])
    const getdata = async () => {
       const data =  await axios.get(url)
           console.log(data);
           setSeeanswer(data.data);
           console.log(seeAnswer);
    }
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
                            <li>Nate </li>
                            <li>2010565</li>
                            <li>CSE</li>
                            <li>100</li>
                            <li>10:00</li>
                            <li>12:00</li>
                        </ul>
                    </div>
                    <div className='lower_div'>
                        {seeAnswer && seeAnswer.map((p) =>
                            (<Cardr className="getCard" key={p._id} ques={p}/>)
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}
export default Responses