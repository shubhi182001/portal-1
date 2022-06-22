import React, { useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import {Card} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import {useLocation ,useNavigate , Link} from "react-router-dom"
import axios from 'axios';

function Editf() {
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state);

    // const[correct , setCorrect] =useState(state.post_options.isCorrect);
    const [question, setQuestion] = useState(state.post_ques)
    const [option, setOption] = useState(" ");            
    const [options, setOptions] = useState(state.post_options)   //array

    const updateQuestion = (e) => {
        setQuestion(e.target.value);
    }
    
    const onInputChange = (e) => {
        setOption(e.target.value)
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setOptions([...options,{Oid: Math.floor(Math.random() * 1000), value:option }])
        setOption(" ");
    }
    
      const handleDelete = (({Oid})=>{
        setOptions(options.filter((option)=>
          option.Oid !== Oid
        ))
      })

      const url = `https://csiportal.herokuapp.com/feedback/${state.post_id}`
      const handleUpload = (e) =>{
        e.preventDefault();
        
        axios.patch(
            url,
            {
                "question": question,
                "options" : options
            }

        ).then((res) => {
            console.log(res);
            console.log(res.data);
            window.alert("data updated")
            navigate('/getfeedbackques');
            
        })
        .catch((err) =>{
            console.log(err);
            window.alert("not updated ERROR!!!")
        })
      }
      console.log(options);

  return (
    <>
    <div className="admin-main">
        <Navbar/>
        <div className="edit">
        <h1 className='edit_text'>Edit Question</h1>
    </div>
    <div className="editq">
        <Card className='editCard'>
            <p className='question_text'>Question</p>
            <textarea className="question_field" onChange={updateQuestion} value={question}></textarea>
            
            <p className='options_text'>Options</p>
            <div className="editOptions">
                <form className='option_form' onSubmit={onFormSubmit}>
                    <input type="text" className='option_input' value = {option} required onChange={onInputChange}  />
                    <button className='button_add' type="submit">Add</button>
                </form>
            </div>
            <div>
                <div>
                    {options.map((option)=>(
                        <li className='option-list' key={option.Oid}>
                        <div className="Einput-list">
                            <input type="Checkbox" className="Einput" value={option.value}  name='opt'/>
                            <span className="Einputval">{option.value}</span>
                            <DeleteIcon onClick={()=>handleDelete(option)} style={{color:"#DE5947", cursor:"pointer"}}/>
                        </div>
                        </li>
                    ))}
                </div>
            </div>
            <div className='upload-cancel'>
                <div className="upload">
                    <button className='upload-btn' onClick={handleUpload}>Uplaod</button>
                </div>
                <div className="cancel">
                    <Link to="/getfeedbackques">
                    <button className='cancel-btn'>Cancel</button>
                    </Link>
                </div>
            </div>
        </Card>
    </div>
    </div>
    </>
  )
}

export default Editf