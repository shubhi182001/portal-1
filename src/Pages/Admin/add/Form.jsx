import React from 'react'
import './ans.css'

const Form = ({setInputText,options,setOptions,inputText}) => {
    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        setOptions(
            [...options,{text:inputText,isRight:false,id:Math.random()*1000}]
        );
        setInputText(' ');
    }
  return (
    <>
    <form action="" onSubmit={submitHandler}>
       <div className="answer-input-field">
            <input value={inputText} 
         onChange={inputTextHandler} type="text" name="" id="" placeholder='Press enter to add an option' />
        {/* <button onClick={submitHandler} type="submit" >
            Answer
        </button> */}
       </div>
       
    </form>
    </>
  )
}

export default Form

