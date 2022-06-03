import React,{useState} from 'react'
import Form from './Form'
import OptionsList from './OptionsList'
const Ans = () => {
    const [inputText,setInputText]=useState('');
    const [options,setOptions]=useState([]);
  return (
    <>
    <header>
        <h1>Answers Section</h1>
    </header>
    <Form  options={options} inputText={inputText} setOptions={setOptions} setInputText={setInputText}/>
    <OptionsList/>
    </>
  )
}

export default Ans