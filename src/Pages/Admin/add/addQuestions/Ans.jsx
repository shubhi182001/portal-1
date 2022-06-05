import React,{useState} from 'react'
import Form from './Form'
import OptionsList from '../addQuestions/OptionsList'
import './ans.css'

const Ans = () => {
    const [inputText,setInputText]=useState('');
    const [options,setOptions]=useState([]);
  return (
    <>
    <div className="answers-and-options">
      <div className="answers-section">
      <p>Answer</p>
    <Form  options={options} inputText={inputText} setOptions={setOptions} setInputText={setInputText}/>
    </div>
    <div className="options-section">
    <OptionsList setOptions={setOptions} options={options}/>
    </div>
    </div>
   
    </>
  )
}

export default Ans