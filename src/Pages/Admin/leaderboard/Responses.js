import React, {useState } from 'react'
import Navbar from '../navbar/Navbar'
// import { Link } from "react-router-dom"
import {useLocation } from 'react-router-dom'
import "./response.css"
// import { Card } from 'react-bootstrap'
// import { style } from '@mui/system'
// import axios from 'axios'
import Cardr from '../leaderboard/Cardr'
import axios from 'axios'
import { useEffect } from 'react'

function Responses() {
    // const navigate = useNavigate();
    const {state} = useLocation();
    // const [Details, setDetails] = useState(state.post_result);
    // const [seeAnswer] = useState(state.post_result);
    

    function changeFormat (date){
        const newLoginTime=new Date(date);
        const newLoginTime2=newLoginTime.toLocaleTimeString();
        return newLoginTime2;
    }
    

//    const event1=state.post_loginAt;
//    const newLoginTime=new Date(event1);
//    const newLoginTime2=newLoginTime.toLocaleTimeString();

    const[uresponse, setUresponse] = useState([]);
    const[user, setUser] = useState({});

   const data = {
    userId:state.post_id
   };
    const url = "https://accessfre.herokuapp.com/fetchanswer";
    const getResponse = () =>{
        axios.put(url,data).then((res) => {
            // console.log(res);
            setUser(res.data);
            setUresponse(res.data.AnswerRes);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        getResponse();
        // eslint-disable-next-line
    },[])


    return (
        <>
            <div className="admin-main">
                <Navbar /> 
                <div className="response">
                    <h1 className='response_text'>Response</h1>
                </div>
                <div className='container_of_data'>
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
                            <li className='bluedetails'>{user? user.name:""}</li>
                            <li className='bluedetails'>{user? user.studentNum:""}</li>
                            <li className='bluedetails'>{user? user.Branch:"" }</li>
                            <li className='bluedetails'>{user? user.score:""}</li>
                            <li className='bluedetails'>{user? changeFormat(user.stTime):""}</li>
                            <li className='bluedetails'>{user? user.enTime:""}</li>
                        </ul>
                    </div>
                    <div className='lower_div'> 
                        {uresponse? 
                        (uresponse.map((p) =>
                            (<Cardr className="getCard" key={p._id} quesData={p}/>)
                        )):""}
                    </div>  
                </div>
            </div>
        </>
    )
}
export default Responses 