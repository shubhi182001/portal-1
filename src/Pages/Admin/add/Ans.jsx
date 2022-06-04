import React,{useState} from 'react'
import Form from './Form'
import OptionsList from './OptionsList'
import './ans.css'

const Ans = () => {
    const [inputText,setInputText]=useState('');
    const [options,setOptions]=useState([]);
  return (
    <>
    <div className="answers-and-options">
      <div className="answers-section">
      <h4>Answer</h4>
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