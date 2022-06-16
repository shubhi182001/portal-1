import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';




function OptionList({optionL, setOptionL}) {
  return (
    <div>
        {optionL.map((option)=>(
            <li className='option-list'>
              <div className="input-list">
                <Checkbox/>
                <input type="text" value={option.title} className="opt-list" onChange={(e) => e.preventDefault()} />
                <DeleteIcon style={{color:"#DE5947", marginLeft :"60%", cursor:"pointer"}}/>
              </div>
            </li>
        ))}
    </div>
  )
}

export default OptionList