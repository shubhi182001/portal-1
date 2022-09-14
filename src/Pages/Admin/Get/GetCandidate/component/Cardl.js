import React from 'react'
const Cardl = ({ ckc}) => {
  

    function changeFormat (date){
        const newLoginTime=new Date(date);
        const newLoginTime2=newLoginTime.toLocaleTimeString();
        return newLoginTime2;
    }

    return (

        <>
            <div className="detailscard">
                <div className='detailsdisplay'>
                    <div>
                    <ul>
                        <li className='info'>Name </li>
                        <li className='info'>Email</li>
                     
                        <li className='info'>StudentNumber</li>
                      
                        <li className='info'>rollNumber</li>
                        <li className='info'>mobileNumber</li>
                        <li className='info'>branch</li>
                      
                        <li className='info'>loginAt</li>
                        <li className='info'>Language</li>

                    </ul>
                    </div>
                    <ul>
                        <li className='bluedetails'>{ckc.name} </li>
                        <li className='bluedetails'>{ckc.email}</li>
                        <li className='bluedetails'>{ckc.studentNum}</li>
                        <li className='bluedetails'>{ckc.rollNum}</li>
                        <li className='bluedetails'>{ckc.mobileNum}</li>
                        <li className='bluedetails'>{ckc.branch}</li>
                        <li className='bluedetails'>{ckc.loginAt? changeFormat(ckc.loginAt):"null"}</li>
                        <li className='bluedetails'>{ckc.lang}</li>

                    </ul>

                </div>

               

            </div>
                <hr className="Hr" />


        </>
    )
}

export default Cardl
