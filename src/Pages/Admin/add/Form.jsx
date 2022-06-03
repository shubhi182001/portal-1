import React from 'react'

const Form = ({setInputText,options,setOptions,inputText}) => {
    const inputTextHandler=(e)=>{
        // console.log(e);
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        setOptions(
            [...options,{text:inputText,isRight:false,id:Math.random()*1000}]
        );
    }
  return (
    <>
    <form action="">
        <input value={inputText} 
         onChange={inputTextHandler} type="text" name="" id="" />
        <button onClick={submitHandler} type="submit">
            Add 
        </button>
        <div className="select">
            <select name="options" id="">
                <option value="all">All</option>
                <option value="completed">Compeleted</option>
                <option value="uncompleted">Uncompeleted</option>
            </select>
        </div>
    </form>
    </>
  )
}

export default Form

