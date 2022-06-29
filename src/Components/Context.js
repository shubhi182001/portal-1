import axios from 'axios';
import React, { createContext, useState } from 'react'
export const contextapi = createContext();
const Context = ({children}) => {
    const [selectedOption,setSlectedOption] = useState('');
  //  console.log(selectedOption);
  //  const url = `https://csiportal.herokuapp.com/question/${choice}`;
  // const choiceques = () => {
  //   axios
  //       .get(
  //        url
  //       )
  //       .then((res) => {
  //   //  setTestques(res.data)

  //         // setTestOptions(testques[showques-1].options);   
  //         console.log(res.data)
  //       })
  //       .catch((err)=>{
  //         console.log(err)
  //       });
  // }
  return (
    <contextapi.Provider value={{setSlectedOption,selectedOption}}>{children}</contextapi.Provider>
  )
}

export default Context;