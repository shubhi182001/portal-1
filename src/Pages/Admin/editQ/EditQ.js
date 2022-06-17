import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./editq.css"
import {Card} from "@mui/material"
import Form from './components/Form'
import OptionList from './components/OptionList'

function EditQ({state}) {

    // console.log(state);


    const [question, setQuestion] = useState(" ")
    const [option, setOption] = useState(" ");
    const [optionL, setOptionL] = useState([])

    const updateQuestion = (e) => {
        setQuestion(e.target.value)
    }

  return (
    <>
    <Navbar/>
    <div className="edit">
        <h1 className='edit_text'>Edit Question</h1>
    </div>
    <div className="editq">
        <Card className='editCard'>
            <p className='question_text'>Question</p>
            <textarea className="question_field" onChange={updateQuestion} ></textarea>
            <p className='category_text'>Category</p>
            <div className="language">
                <select className="select select_lang" defaultValue={"DEFAULT"}style={{color:"black",fontSize:"15px", fontFamily:"Roboto" }} name="lang" id="options" >
                    <option value="DEFAULT"  >HTML</option>
                    {/* <option value="C"style={{color:"black",backgroundColor:"#F6FCFF"}}>HTML</option> */}
                    <option value="C++"style={{color:"black",backgroundColor:"#F6FCFF"}}>CSS</option>
                    <option value="Java"style={{color:"black",backgroundColor:"#F6FCFF"}}>LANGUAGE</option>
                    <option value="Python"style={{color:"black",backgroundColor:"#F6FCFF"}}>APTITUDE</option>
                </select>
            </div>
            <p className='options_text'>Options</p>
            <div className="editOptions">
                <Form 
                option={option}
                setOption={setOption}
                optionL={optionL}
                setOptionL={setOptionL}
                />
            </div>
            <div>
                <OptionList optionL={optionL} setOptionL={setOptionL}/>
            </div>
            <div className='upload-cancel'>
                <div className="upload">
                    <button className='upload-btn'>Uplaod</button>
                </div>
                <div className="cancel">
                    <button className='cancel-btn'>Cancel</button>
                </div>
            </div>
        </Card>
    </div>
    </>
  )
}

export default EditQ