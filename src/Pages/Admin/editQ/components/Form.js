import React from 'react'
import OptionList from './OptionList';
// import "/editq.css"

function Form({option, setOption, optionL, setOptionL}) {

    const onInputChange = (e) => {
        setOption(e.target.value)
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setOptionL([...optionL,{title:option, completed: false }])
        setOption(" ")
    }

  return (

    <form className='option_form' onSubmit={onFormSubmit}>
        <input type="text" className='option_input' value = {option} required onChange={onInputChange}  />
        <button className='button_add' type="submit">Add</button>
    </form>
    
  )
}

export default Form