import React from 'react'
// import {Card} from "@mui/material"
import axios from 'axios';
import { Link } from "react-router-dom";

function Cardc({ques, reload}) {
    console.log(ques);
    const url = `https://csiportal.herokuapp.com/question/${ques._id}`;
    const deleteQuestion = () => (
        axios.delete(url)
        .then(()=>{
            reload();
            console.log("deleted");            
        })
    )

    console.log(ques.options)
    

  return (
    <div className="cardContainer">
    <div className='edit-Card'>
            <div className="cardElements">
              <p className='question_text'>Question</p>
              <p className="question-field"  >{ques.question}</p>
              <p className='category_text'>Category</p>
              <p className='category' >{ques.category}</p>
              <p className='options_text'>Options</p>
                
                {ques.options && ques.options.length?
                    ques.options.map((o)=>(
                        <>
                        <input type="radio" className="option_box_radio" value={o.value} name='opt' />
                        <b>{o.value}{o.Oid}</b>
                        <br></br>
                        </>
                    )): null
                }
                
                

              <div className='edit-delete'>
                  <div className="edit">
                  <Link to="/editq"><button className='edit-btn'>Edit</button></Link>
                  </div>
                  <div className="delete">
                      <button className='delete-btn' onClick={deleteQuestion} >Delete</button>
                  </div>
              </div>
              <hr className="cardHr" />
          </div>
        </div>
        </div>
  )
}

export default Cardc