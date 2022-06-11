import React from 'react'

function OptionList({optionL, setOptionL}) {
  return (
    <div>
        {optionL.map((option)=>(
            <li className='option-list'>
                <input type="text" value={option.title} className="list" onChange={(e) => e.preventDefault()} />
            </li>
        ))}
    </div>
  )
}

export default OptionList