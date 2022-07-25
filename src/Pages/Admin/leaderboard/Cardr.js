import React from 'react'
import Navbar from '../navbar/Navbar';

function Cardr({ quesData }) {
  console.log(quesData.length);
  return (
    <>
    <div className="cardElements">
    <div className="question-field">
      
    </div>
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

