import React from 'react'
// import Navbar from '../navbar/Navbar';

function Cardr({ quesData }) {

  function check(){
    if(quesData.isCorrect === false){
      return "No";
    }
    return "Yes";
  }

  function submitCheck(){
    if(quesData.ansid === 1){
      return "Question Answered"
    }
    else if(quesData.ansid === 2 || quesData.ansid=== 5){
      return "Visited but not Answered"
    }
    else if(quesData.ansid === 3){
      return "Answered and Marked for Review"
    }
    

  }
  return (
    <>
    <div className="cardElements">
    <div className="quest-field">
    <span className="quest-field"  >Question <div className='bluedetails'>{quesData.question}</div></span>
      
    </div>
    <div className="quest-field">
    <span className="quest-field"  >Category<div className='bluedetails'>{quesData.category}</div></span>
      
    </div>
    <div className="quest-field">
    <span className="quest-field"  >Answer<div className='bluedetails'>{quesData.selectedOpt?quesData.selectedOpt:"N/A"}</div></span>
     
    </div>
    <div className="quest-field">
    <span className="quest-field"  >Correct<div className='bluedetails'>{check()}</div></span>
     
    </div>
    <div className="quest-field">
    <span className="quest-field"  >Status<div className='bluedetails'>{submitCheck()}</div></span>
      
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

