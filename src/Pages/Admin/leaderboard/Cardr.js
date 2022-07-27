import React from 'react'
import Navbar from '../navbar/Navbar';

function Cardr({ quesData }) {
  console.log(quesData.length);
  return (
    <>
    <div className="cardElements">
    <div className="quest-field">
    <p className="quest-field"  >Qtion <div className='bluedetails'>{quesData.question}</div></p>
      
    </div>
    <div className="quest-field">
    <p className="quest-field"  >Category<div className='bluedetails'>{quesData.category}</div></p>
      
    </div>
    <div className="quest-field">
    <p className="quest-field"  >Answers<div className='bluedetails'>{quesData.answer}</div></p>
     
    </div>
    <div className="quest-field">
    <p className="quest-field"  >Correct<div className='bluedetails'>{quesData.isCorrect}</div></p>
     
    </div>
    <div className="quest-field">
    <p className="quest-field"  >Status<div className='ques-field'>{quesData.category}</div></p>
      
    </div>
    <hr className='Hr'/>
    </div>
    </>
    // <div className="cardElements">
    //   {/* <p className="question-field"  >feef</p> */}
    //   <div className="question-field"  >
    //     {/* <div> {ques.name}
    //         </div>
    //   <div> {ques.branch}
    //         </div> */}
    //     {/* <p className='question_text'>Question</p> */}

    //     { ques.results.map((q, index) => {
    //       <>
    //         {/* <p className='category_text'>Question</p> */}
    //         <p className='category' key={index}>{ques.results[index] && q.question}</p>
    //         {/* <p className='category_text'>Category</p> */}
    //         {/* <p className='category' >{q.category}</p> */}

    //       </>
    //     })}
    //   </div>


    // </div>
  )
}



export default Cardr

