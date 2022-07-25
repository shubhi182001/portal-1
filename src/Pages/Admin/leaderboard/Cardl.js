import React from 'react'

const Cardl = ({ckc,reload}) => {
    const studentDetail = ['Name', 'StudentNo', 'Branch', 'Score', 'language'];
    const showDetails = studentDetail.map((info => <li>{info}</li>))
    return (
        <>
            <div className="cardContainer" style={{border:"2px solid black"}}>
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
                            <button className='edit-btn'>Edit</button>
                        </div>
                        <div className="delete">
                            <button className='delete-btn' >Delete</button>
                        </div>
                    </div>
                    <hr className="cardHr" />
                </div>

            
        </>
    )
}

export default Cardl
