import React from 'react'
import { useNavigate } from 'react-router-dom';
const Cardl = ({ ckc}) => {
    const navigate = useNavigate();
    const openDetails =()=>{
        navigate('/getcandidate')
    }
    const openResponse = () => {
        navigate('/responses', {
            state: {
                post_id: ckc._id,
                // post_name: ckc.name,
                // post_branch: ckc.branch,
                // post_studentnum: ckc.studentNum,
                // post_result: ckc.results,
                // post_loginAt: ckc.loginAt,
                // post_logoutAt: ckc.logoutAt,
                // post_userNumCount: ckc.userNumCount.TotalNum,

                // post_studentnum: ckc.studentNum,
                // post_score: ckc.score

            } 
            
        });
    }
    // const studentDetail = ['Name', 'StudentNo', 'Branch', 'Score', 'language'];
    // const showDetails = studentDetail.map((info => <li key={studentDetail}>{info}</li>))
    return (
        <>
            <div className="detailscard">
                <div className='detailsdisplay'>
                    <div>
                    <ul>
                        <li className='info'>Name </li>
                        <li className='info'>StudentNo</li>
                        <li className='info'>Branch</li>
                        <li className='info'>Score</li>
                        <li className='info'>Language</li>

                    </ul>
                    </div>  
                    <ul>
                        <li className='bluedetails'>{ckc.name} </li>
                        <li className='bluedetails'>{ckc.studentNum}</li>
                        <li className='bluedetails'>{ckc.branch}</li>
                        <li className='bluedetails'>{ckc.userNumCount.TotalNum}</li>
                        <li className='bluedetails'>{ckc.lang}</li>

                    </ul>

                </div>

                <div className='buttonsdisplay'>
                    <div className="fetch-details">
                        <button className='fetch-detail-btn' onClick={openDetails}>Fetch Details</button>
                    </div>
                    <div className="delete">
                        <button className='fetch-answers-btn'
                            onClick={openResponse}>Fetch Answers</button>
                    </div>
                </div>

            </div>
                <hr className="Hr" />


        </>
    )
}

export default Cardl
