import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./editq.css"
import {Card} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import axios from "axios"

function EditQ() {

    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state);

    // const[correct , setCorrect] =useState(state.post_options.isCorrect);
    const [question, setQuestion] = useState(state.post_ques)
    const[category, setCategory] = useState(state.post_category)
    const [option, setOption] = useState(" ");            
    const [options, setOptions] = useState(state.post_options)   //array

    const updateQuestion = (e) => {
        setQuestion(e.target.value);
    }
    const updateCategory = (e) =>{
        setCategory(e.target.value);
    }

    const onInputChange = (e) => {
        setOption(e.target.value)
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setOptions([...options,{Oid: Math.floor(Math.random() * 1000), value:option, isCorrect:false }])
        setOption(" ");
    }
    
      const handleDelete = (({Oid})=>{
        setOptions(options.filter((option)=>
          option.Oid !== Oid
        ))
      })

      const url = `https://csiportal.herokuapp.com/question/${state.post_id}`
      const handleUpload = (e) =>{
        e.preventDefault();
        
        axios.patch(
            url,
            {
                "question": question,
                "category": category,
                "options" : options
            }

        ).then((res) => {
            console.log(res);
            console.log(res.data);
            window.alert("data updated")
            navigate('/getques');
            
        })
        .catch((err) =>{
            console.log(err);
            window.alert("not updated ERROR!!!")
        })
      }

    //   console.log(options);
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
            <p className='category_text'>Category</p>
            <div className="language">
                <select className="select select_lang" value={category} onChange={updateCategory} style={{color:"black",fontSize:"15px", fontFamily:"Roboto" }} name="lang" id="options" >
                    {/* <option value="DEFAULT"  >CSS</option> */}
                    <option value="HTMl"style={{color:"black",backgroundColor:"#F6FCFF"}}>HTML</option>
                    <option value="CSS"style={{color:"black",backgroundColor:"#F6FCFF"}}>CSS</option>
                    <option value="C++"style={{color:"black",backgroundColor:"#F6FCFF"}}>C++</option>
                    <option value="C"style={{color:"black",backgroundColor:"#F6FCFF"}}>C</option>
                    <option value="JAVA"style={{color:"black",backgroundColor:"#F6FCFF"}}>JAVA</option>
                    <option value="Python"style={{color:"black",backgroundColor:"#F6FCFF"}}>APTITUDE</option>
                </select>
            </div>
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
                            <input type="Checkbox" checked={option.isCorrect} className="Einput" value={option.value} onClick={() =>[
                                setOptions(options.map((e)=>{
                                    if(e.Oid === option.Oid){
                                        return{
                                            ...e, isCorrect: !e.isCorrect
                                        }
                                    }
                                    return e;
                                }))
                            ]} name='opt'/>
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
                    <Link to="/getques">
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

export default EditQ