import React from 'react'
// import {Card} from "@mui/material"
import axios from 'axios';
import { Link } from "react-router-dom";
// import { Checkbox } from '@mui/material';

function Cardc({ques, reload}) {

    // const[isChecked, setIsChecked] = useState(false);
    
  // console.log(ques.options[3].isCorrect);
    
    // const check = ((value)=>{
    //     for(let i=0; i<ques.options.length; i++){
    //       if(value[i]===true){
    //         setIsChecked(true);
    //       }
    //       else{
    //         setIsChecked(false);
    //       }
    //   }
    // }
// )
    

    // console.log(ques);
    const url = `https://csiportal.herokuapp.com/question/${ques._id}`;
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
              <p className='question_text'>Question</p>
              <p className="question-field"  >{ques.question}</p>
              <p className='category_text'>Category</p>
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
                  <Link to="/editq" state={[ques.question, ques.category]}><button className='edit-btn'>Edit</button></Link>
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