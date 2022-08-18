import React, { createContext, useContext, useState } from "react";
export const contextapi = createContext();
export const Context = ({ children }) => {
  const [oid, setOid] = useState("000");

  return (
    <contextapi.Provider value={{ oid, setOid }}>
      {children}
    </contextapi.Provider>
  );
};

export const useStateContext = () => useContext(contextapi);
