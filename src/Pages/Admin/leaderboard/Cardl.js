import React from 'react'

const Cardl = ({ckc,reload}) => {
    const studentDetail = ['Name', 'StudentNo', 'Branch', 'Score', 'language'];
    const showDetails = studentDetail.map((info => <li>{info}</li>))
    return (
        <>
            <div className="cardContainer">
                <div className='edit-Card'>
                    <div className='upper_div'>
                        <div classname='info'>{showDetails}</div>
                        <ul>
                            <li>{ckc.name} </li>
                            <li>{ckc.studentNum}</li>
                            <li>{ckc.branch}</li>
                            <li>Score</li>
                            <li>{ckc.lang}</li>
                           
                        </ul>
                        <div className="details-btn">
                            <button className='fetch-details'>fetchdetails</button>
                        </div>
                        <div className="answer">
                            <button className='answer-btn'  >fetchanswer</button>
                        </div>
                    </div>

                    <div className='edit-delete'>
                        <div className="edit">
                            <button className='edit-btn'>Edit</button>
                        </div>
                        <div className="delete">
                            <button className='delete-btn' >Delete</button>
                        </div>
                    </div>
                    <hr className="cardHr" />
                </div>

            </div>
        </>
    )
}

export default Cardl
