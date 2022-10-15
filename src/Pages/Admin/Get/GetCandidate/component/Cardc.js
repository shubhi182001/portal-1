import React from 'react'
// import {Card} from "@mui/material"
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
// import { Checkbox } from '@mui/material';

function Cardc({key,ques, reload}) {

  const navigate = useNavigate();
  const openEditPage = () =>{
    navigate('/editq',{
      state:{
        post_id: ques._id,
        post_ques : ques.question,
        post_category: ques.category,
        post_options: ques.options
      }
    });
  }
       

    // console.log(ques);
    const url = `${process.env.REACT_APP_URL}/question/${ques._id}`;
    const deleteQuestion = () => (
        axios.delete(url)
        .then(()=>{
            reload();
            window.alert("Question will be deleted !!!");
            console.log("deleted");            
        })
    )

  return (
    <div className="cardContainer">
    <div className='edit-Card'>
            <div className="cardElements">
              <p className='question_text'>Name</p>
              <p className="question-field"  >{ques.question}</p>
              <p className='category_text'>Categor</p>
              <p className='category' >{ques.category}</p>
              <p className='options_text'>Options</p>
                
                {ques.options && ques.options.length?
                    ques.options.map((o)=>(
                        <>
                        <li key={o.Oid}>
                        <div className="Gopt-list">
                        <input type="Checkbox" checked={o.isCorrect} className="Ginput" value={o.value} readOnly name='opt'   />
                        <span className="Ginputval">{o.value}</span>
                        </div>
                        </li>
                        </>
                    )): null
                }
                
              <div className='edit-delete'>
                  <div className="edit">
                  <button onClick={openEditPage} className='edit-btn'>Edit</button>
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