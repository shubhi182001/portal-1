import React from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"


function Cardf({ques, reload}) {
    const navigate = useNavigate();
    const url = `${process.env.REACT_APP_URL}/feedback/${ques._id}`;
    const deleteQuestion = () => (
        axios.delete(url)
        .then(()=>{
            reload();
            window.alert("Question will be deleted !!!");
            console.log("deleted");            
        })
    )

    // const handleChange = (e) => {
    //     e.preventDefault();
    // }

    const openEditPage = () =>{
        navigate('/editf', {
            state: {
            post_id: ques._id,
            post_ques : ques.question
            }
        })
    }



  return (
    <>
    <div className="cardContainer">
    <div className='edit-Card'>
            <div className="cardElements">
              <p className='question_text'>Question</p>
              <p className="question-field"  >{ques.question}</p>
              
              {/* <p className='options_text'>Options</p>
                
                {ques.options && ques.options.length?
                    ques.options.map((o)=>(
                        <>
                        <li key={o.Oid}>
                        <div className="Gopt-list">
                        <input type="Checkbox" defaultChecked={false} onClick={handleChange} className="Ginput"  name='opt'/>
                        <span className="Ginputval">{o.value}</span>
                        </div>
                        </li>
                        </>
                    )): null
                }
                 */}
              <div className='edit-delete'>
                  <div className="edit">
                  <button onClick={openEditPage}   className='edit-btn'>Edit</button>
                  </div>
                  <div className="delete">
                      <button className='delete-btn' onClick={deleteQuestion} >Delete</button>
                  </div>
              </div>
              <hr className="cardHr" />
          </div>
        </div>
        </div>
    
    </>
  )
}

export default Cardf