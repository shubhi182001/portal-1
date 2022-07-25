import React from 'react'
import PropTypes from 'prop-types'

function Cardr({ ques }) {
  console.log(ques.results.length);

  let questionRes;
  if (ques) {
    questionRes = ques.results;
  }

  console.log(questionRes);
  return (
    <div className="cardElements">
      {/* <p className="question-field"  >feef</p> */}
      <div className="question-field"  >
        {/* <div> {ques.name}
            </div>
      <div> {ques.branch}
            </div> */}
        {/* <p className='question_text'>Question</p> */}

        { ques.results.map((q, index) => {
          <>
            {/* <p className='category_text'>Question</p> */}
            <p className='category' key={index}>{ques.results[index] && q.question}</p>
            {/* <p className='category_text'>Category</p> */}
            {/* <p className='category' >{q.category}</p> */}

          </>
        })}
      </div>


    </div>
  )
}



export default Cardr

