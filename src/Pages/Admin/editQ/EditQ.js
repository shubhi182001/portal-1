import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./editq.css"
import {Card} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import axios from "axios"
import $ from 'jquery' 

function EditQ() {

    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state);

    // const[correct , setCorrect] =useState(state.post_options.isCorrect);
    const [question, setQuestion] = useState(state.post_ques)
    const[category, setCategory] = useState(state.post_category)
    const [option, setOption] = useState("");            
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
        setOption("");
    }
    
      const handleDelete = (({Oid})=>{
        setOptions(options.filter((option)=>
          option.Oid !== Oid
        ))
      })

      function check(){
          const fields = $(`input[name='opt']`).serializeArray();
          if (fields.length === 0) {
            console.log('nothing selected');
            return false;
          } else {
            console.log(fields.length, "items selected");
          }
          return true;
      }
   

      const url = `${process.env.REACT_APP_URL}/question/${state.post_id}`
      const handleUpload = (e) =>{
        e.preventDefault();

        if(question && options.length <= 4 && check()){
            axios.patch(
                url,
                {
                    "question": question,
                    "category": category,
                    "options" : options
                }
    
            ).then((res) => {
                // console.log(res);
                // console.log(res.data);
                window.alert("data updated")
                navigate('/getques');
                
            })
            .catch((err) =>{
                console.log(err);
                window.alert("not updated ERROR!!!")
            })
          }
          else{
            // if(!question){
            //     window.alert("Can't Leave Question field empty");
            // }
            if(options.length===0){
                window.alert("Add options");
            }
            if(options.length>0 && options.length<=4){
                if(!check()){
                    window.alert("You have to select at least one correct option");
                }
            }
            if(options.length>4){
                window.alert("Only 4 options are possible");
            }
          }
        }


    //   console.log(options);
  return (
    <>
    <div className="admin-main edit-main">
    <Navbar/>
    <div className="edit">
        <h1 className='edit_text'>Edit Question</h1>
    </div>
    <div className="editq">
        <Card className='editCard'>
            <p className='question_text'>Question</p>
            <textarea className="question_field" required onChange={updateQuestion} defaultValue={question}></textarea>
            {question.length===0 ? <p style={{marginLeft:"10px", color:"red", fontWeight:"bolder"}}>Question is required</p>:null}
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
                            <input type="Checkbox"  defaultChecked={option.isCorrect} className="Einput" defaultValue={option.value} onClick={() =>[
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