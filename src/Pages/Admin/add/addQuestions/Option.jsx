import React from 'react'
import './optionlist.css'

const Option = ({text,option,options,setOptions}) => {

  const deleteHandler=()=>{
            setOptions(options.filter(el=>el.id!==option.id))
            console.log(option);
  };

  const correctOptionHandler=()=>{
    setOptions(options.map(item=>{
             if(item.id===option.id){
               return{
                 ...item,isRight:!item.isRight
               }
             }
            return item;
    }))
  }
  return (
   <>
    <div className="option">
         {/* <input type="checkbox" name="" id="" /> */}
        <button className="s-class item-1 check" onClick={correctOptionHandler}>?</button>
        <li className="s-class item-2 option-item">{text}</li>
        <button className="s-class item-3  delete" onClick={deleteHandler}>*</button>
       
    </div>
   </>
  )
}

export default Option