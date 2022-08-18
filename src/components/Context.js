import React, { createContext, useState } from 'react'
export const contextapi = createContext();
const Context = ({children}) => {
    const [option,setOption] = useState("");
  return (
    <Context.provider value = {{option,setOption}}>{children}</Context.provider>
  )
}

export default Context;