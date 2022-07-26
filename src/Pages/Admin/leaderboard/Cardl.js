import React from 'react'
import { useNavigate } from 'react-router-dom';
const Cardl = ({ckc,reload}) => {
    const navigate = useNavigate();
    const openResponse = () =>{
        navigate('/responses',{
          state:{
            post_id: ckc._id,
            post_name :ckc.name,
            post_branch: ckc.branch,
            post_studentnum: ckc.studentNum,
            post_result: ckc.results,

            // post_studentnum: ckc.studentNum,
            // post_score: ckc.score

          }
        });
      }
    const studentDetail = ['Name', 'StudentNo', 'Branch', 'Score', 'language'];
    const showDetails = studentDetail.map((info => <li>{info}</li>))
    return (

        <>
            <div className="cardContainer">
                <div className='edit-Card'>
                        <div classname='info'>{showDetails}</div>
                        <ul>
                            <li>{ckc.name} </li>
                            <li>{ckc.studentNum}</li>
                            <li>{ckc.branch}</li>
                            <li>Score</li>
                            <li>{ckc.lang}</li>
                           
                        </ul>
                    </div>

                    <div className='edit-delete'>
                        <div className="edit">
                            <button className='edit-btn'>Fetch Details</button>
                        </div>
                        <div className="delete">
                            <button className='delete-btn' 
                            onClick={openResponse}>Fetch Answers</button>
                        </div>
                    </div>
                    <hr className="cardHr" />
                </div>

            
        </>
    )
}

export default Cardl
