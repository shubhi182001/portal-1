import React, {useState} from 'react'
import Navbar from '../../navbar/Navbar'
import { Link } from 'react-router-dom'
import "./getq.css"
import {Card} from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Form from "../../editQ/components/Form"
import OptionList from '../../editQ/components/OptionList';

const GetQ = () => {
  const [question, setQuestion] = useState(" ")
  const [option, setOption] = useState(" ");
    const [optionL, setOptionL] = useState([])

    const updateQuestion = (e) => {
      setQuestion(e.target.value)
  }

  return (
    <>
    <Navbar/>
    <div className="get">
        <h1 className='get_text'>Questions</h1>
    </div>
    <div className="searchbar">
      <input className='search' type="text" placeholder='Search'/>
      <SearchOutlinedIcon className='search-icon' style={{fontSize:"2.9rem", marginRight:"20px"}}/>
    </div>
    <div className="editq">
        <Card className='editCard'>
            <p className='question_text'>Question</p>
            <p className="question-field" onChange={updateQuestion} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi accusantium est numquam assumenda consectetur. Sint velit deleniti facilis iusto recusandae.</p>
            <p className='category_text'>Category</p>
            <p className='category'>HTML</p>
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
            <div className='edit-delete'>
                <div className="edit">
                <Link to="/editq"><button className='edit-btn'>Edit</button></Link>
                </div>
                <div className="delete">
                    <button className='delete-btn'>Delete</button>
                </div>
            </div>
        </Card>
    </div>
    </>
  )
}

export default GetQ