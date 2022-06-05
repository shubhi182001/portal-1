import React from 'react'
import Option from '../addQuestions/Option'
import './optionlist.css'

const OptionsList = ({options,setOptions}) => {
  console.log(options);
  return (
   <>
   <div className="option-container">
       <ul className="option-list">
           {options.map(option=>(
             <Option 
             setOptions={setOptions}
             options={options}
             text={option.text}
             option={option} 
             key={option.id}/>
           ))}
       </ul>
   </div>
   </>
  )
}

export default OptionsList